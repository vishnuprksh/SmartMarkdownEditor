import React, { useState } from 'react'
import { useCellValue, usePublisher } from '@mdxeditor/gurx'
import { activeEditor$, currentSelection$, insertMarkdown$, markdown$ } from '../core'
import { getGeminiService } from './geminiService'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon, MagicWandIcon } from '@radix-ui/react-icons'
import styles from './aiToolbar.module.css'

export interface AIToolbarProps {
  apiKey: string
}

// Simplified: Single freeform prompt -> AI generates markdown inserted at cursor (or appended if no selection)

export const AIToolbar: React.FC<AIToolbarProps> = ({ apiKey }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [prompt, setPrompt] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const activeEditor = useCellValue(activeEditor$)
  const currentSelection = useCellValue(currentSelection$)
  const currentMarkdown = useCellValue(markdown$)
  const insertMarkdown = usePublisher(insertMarkdown$)
  // We only need to insert; full replace not required in simplified UI

  const getSelectedText = (): string => {
    if (!activeEditor || !currentSelection) return ''
    
    try {
      return activeEditor.getEditorState().read(() => {
        const selection = currentSelection
        if (selection) {
          return selection.getTextContent()
        }
        return ''
      })
    } catch (error) {
      console.error('Error getting selected text:', error)
      return ''
    }
  }

  const executeAI = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt.')
      return
    }
    setIsLoading(true)
    setError(null)
    try {
      const geminiService = getGeminiService(apiKey)
      // If user selected text, we can contextualize the prompt
      const selectedText = getSelectedText()
      const fullPrompt = selectedText
        ? `You are assisting with editing markdown content. The user prompt: "${prompt}". Selected markdown to inform your response (do not just repeat it):\n\n${selectedText}\n\nReturn only markdown content.`
        : prompt
      const result = await geminiService.generateText(fullPrompt)
      // If there is a selection and prompt suggests transformation keywords, optionally replace.
      const lower = prompt.toLowerCase()
      const wantsRewrite = /improve|rewrite|refactor|make |summarize|shorter|longer/.test(lower)
      if (selectedText && wantsRewrite) {
        replaceSelectedText(result.trim())
      } else {
        insertMarkdown('\n\n' + result.trim())
      }
      setIsOpen(false)
      setPrompt('')
    } catch (e) {
      console.error('AI generation failed:', e)
      setError(e instanceof Error ? e.message : 'Failed to generate content')
    } finally {
      setIsLoading(false)
    }
  }

  const replaceSelectedText = (newText: string) => {
    if (!activeEditor || !currentSelection) return

    activeEditor.update(() => {
      const selection = currentSelection
      if (selection) {
        selection.insertText(newText)
      }
    })
  }

  const selectionLength = getSelectedText().trim().length

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button 
          className={styles.triggerButton}
          title="AI Assistant"
          aria-label="Open AI Assistant"
        >
          <MagicWandIcon />
          <span>AI</span>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <Dialog.Title className={styles.title}>
            AI Assistant
          </Dialog.Title>
          <Dialog.Description className={styles.description}>
            Choose an AI action to enhance your content
          </Dialog.Description>

          <div className={styles.form}>
            <div className={styles.field}>
              <label className={styles.label}>Prompt</label>
              <textarea
                className={styles.textarea}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder={selectionLength ? 'Describe how to transform the selected text...' : 'Ask AI to generate or help with markdown...'}
                rows={4}
              />
            </div>
            {selectionLength > 0 && (
              <div className={styles.selectionInfo + ' ' + styles.hasSelection}>
                Using selection as context ({selectionLength} chars)
              </div>
            )}
            {error && <div className={styles.error}>{error}</div>}
            <div className={styles.actions}>
              <Dialog.Close asChild>
                <button className={styles.cancelButton} disabled={isLoading}>Cancel</button>
              </Dialog.Close>
              <button
                className={styles.executeButton}
                onClick={executeAI}
                disabled={isLoading || !prompt.trim()}
              >
                {isLoading ? 'Generating...' : 'Generate'}
              </button>
            </div>
          </div>

          <Dialog.Close asChild>
            <button className={styles.closeButton} aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
