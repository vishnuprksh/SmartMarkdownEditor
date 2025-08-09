import React, { useState, useEffect, useCallback } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { 
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  linkPlugin,
  linkDialogPlugin,
  quotePlugin,
  toolbarPlugin,
  KitchenSinkToolbar,
  codeBlockPlugin,
  codeMirrorPlugin,
  diffSourcePlugin,
  tablePlugin,
  thematicBreakPlugin,
  frontmatterPlugin,
  markdownShortcutPlugin,
  imagePlugin,
  aiPlugin,
  CodeBlockEditorDescriptor,
  useCodeBlockEditorContext
} from '@mdxeditor/editor'

interface Document {
  id: string
  title: string
  content: string
  lastModified: Date
  wordCount: number
}

// Default code block editor for handling code blocks without specific language
const DefaultCodeBlockEditorDescriptor: CodeBlockEditorDescriptor = {
  match: () => true,
  priority: 0,
  Editor: (props) => {
    const cb = useCodeBlockEditorContext()
    return (
      <div
        onKeyDown={(e) => {
          e.nativeEvent.stopImmediatePropagation()
        }}
        style={{
          backgroundColor: '#f8f9fa',
          border: '1px solid #e9ecef',
          borderRadius: '4px',
          padding: '8px'
        }}
      >
        <textarea
          style={{
            width: '100%',
            minHeight: '60px',
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
            fontFamily: 'Monaco, "Lucida Console", monospace',
            fontSize: '14px',
            resize: 'vertical'
          }}
          defaultValue={props.code}
          onChange={(e) => {
            cb.setCode(e.target.value)
          }}
          placeholder="Enter your code here..."
        />
      </div>
    )
  }
}

const Editor: React.FC = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const docId = searchParams.get('doc')
  
  const [markdown, setMarkdown] = useState('')
  const [title, setTitle] = useState('')
  const [savedStatus, setSavedStatus] = useState<'saved' | 'saving' | 'unsaved'>('saved')
  const [wordCount, setWordCount] = useState(0)
  const [hasBeenManuallySaved, setHasBeenManuallySaved] = useState(false)

  // Plugin configuration
  const plugins = [
    // Core editing plugins
    headingsPlugin(),
    listsPlugin(),
    linkPlugin(),
    linkDialogPlugin(),
    quotePlugin(),
    tablePlugin(),
    thematicBreakPlugin(),
    frontmatterPlugin(),
    markdownShortcutPlugin(),
    imagePlugin(),
    
    // Code editing plugins
    codeBlockPlugin({ 
      defaultCodeBlockLanguage: '',
      codeBlockEditorDescriptors: [DefaultCodeBlockEditorDescriptor]
    }),
    codeMirrorPlugin({
      codeBlockLanguages: {
        '': 'Plain Text',
        js: 'JavaScript',
        jsx: 'JavaScript (React)',
        ts: 'TypeScript',
        tsx: 'TypeScript (React)',
        css: 'CSS',
        html: 'HTML',
        python: 'Python',
        java: 'Java',
        cpp: 'C++',
        c: 'C',
        php: 'PHP',
        ruby: 'Ruby',
        go: 'Go',
        rust: 'Rust',
        shell: 'Shell',
        bash: 'Bash',
        sql: 'SQL',
        json: 'JSON',
        xml: 'XML',
        yaml: 'YAML',
        markdown: 'Markdown',
        txt: 'Plain Text'
      }
    }),
    
    // Advanced plugins
    diffSourcePlugin({ 
      viewMode: 'rich-text',
      diffMarkdown: ''
    }),
    
    // AI Plugin - for intelligent content generation and editing
    aiPlugin({
      apiKey: (import.meta as any).env?.VITE_GEMINI_API_KEY || 'YOUR_GEMINI_API_KEY_HERE', // Provide via .env
      enabled: true,
      toolbarPosition: 'top'
    }),
    
    // Toolbar must be last to include all features
    toolbarPlugin({ toolbarContents: () => <KitchenSinkToolbar /> })
  ]

  // Load document on mount
  useEffect(() => {
    if (docId) {
      const documents = JSON.parse(localStorage.getItem('markdown-documents') || '[]')
      const doc = documents.find((d: Document) => d.id === docId)
      if (doc) {
        setMarkdown(doc.content)
        setTitle(doc.title)
        setWordCount(doc.wordCount)
        setHasBeenManuallySaved(true) // Existing document has been saved before
      }
    } else {
      // New document
      const now = new Date()
      setTitle(`Untitled Document - ${now.toLocaleDateString()}`)
      setMarkdown('# Welcome to Smart Markdown Editor with AI ✨\n\nStart writing your document here. This intelligent editor supports all markdown features including:\n\n- **Bold** and *italic* text\n- [Links](https://example.com)\n- Code blocks with syntax highlighting\n- Tables, lists, and quotes\n- **🤖 AI-Powered Writing Assistant** (click the AI button in the toolbar!)\n- And much more!\n\n## 🚀 AI Features\n\nClick the **AI** button in the toolbar to access powerful writing assistance:\n\n- **Generate Content**: Create new content from topics or prompts\n- **Improve Text**: Enhance selected text for clarity and quality\n- **Continue Writing**: Let AI continue from where you left off\n- **Summarize**: Generate summaries of selected content\n- **Change Tone**: Rewrite text in formal, casual, or professional tones\n\n## Getting Started\n\n1. **Save First**: Press **Ctrl+S** or click **Save** to enable auto-save\n2. **Try AI**: Select some text and click the **AI** button to enhance it\n3. **Write Freely**: The editor supports all standard markdown syntax\n\n## Code Block Examples\n\nCreate code blocks in two ways:\n\n1. **Toolbar**: Click the code block button\n2. **Markdown**: Type three backticks ``` followed by language\n\n```javascript\n// Try selecting this code and using AI to add documentation\nfunction greetUser(name) {\n  return `Hello, ${name}! Welcome to the AI-powered editor.`;\n}\n```\n\n```python\n# AI can help explain and improve your code\ndef calculate_fibonacci(n):\n    if n <= 1:\n        return n\n    return calculate_fibonacci(n-1) + calculate_fibonacci(n-2)\n```\n\n## ✨ Pro Tips\n\n- Select any text and use AI to improve, summarize, or change its tone\n- Generate new content by clicking AI → Generate Content\n- Use AI to continue writing when you\'re stuck\n- The AI understands context and maintains your writing style\n\n---\n\n**Ready to write with AI assistance? Click the AI button and start exploring!** 🚀')
      setHasBeenManuallySaved(false) // New document hasn't been saved yet
    }
  }, [docId])

  // Auto-save functionality
  const saveDocument = useCallback(() => {
    if (!markdown.trim() && !title.trim()) return

    const documents = JSON.parse(localStorage.getItem('markdown-documents') || '[]')
    const currentWordCount = markdown.trim().split(/\s+/).filter(word => word.length > 0).length
    
    const docData = {
      id: docId || Date.now().toString(),
      title: title || 'Untitled Document',
      content: markdown,
      lastModified: new Date(),
      wordCount: currentWordCount
    }

    const existingIndex = documents.findIndex((d: Document) => d.id === docData.id)
    if (existingIndex >= 0) {
      documents[existingIndex] = docData
    } else {
      documents.unshift(docData)
    }

    localStorage.setItem('markdown-documents', JSON.stringify(documents))
    setWordCount(currentWordCount)
    setSavedStatus('saved')

    // Update URL if this is a new document
    if (!docId) {
      navigate(`/?doc=${docData.id}`, { replace: true })
    }
  }, [markdown, title, docId, navigate])

  // Manual save function
  const manualSave = useCallback(() => {
    setSavedStatus('saving')
    saveDocument()
    setHasBeenManuallySaved(true) // Enable auto-save after first manual save
  }, [saveDocument])

  // Auto-save on content change (only after first manual save)
  useEffect(() => {
    setSavedStatus('unsaved')
    
    // Only auto-save if the document has been manually saved at least once
    if (hasBeenManuallySaved) {
      const timer = setTimeout(() => {
        setSavedStatus('saving')
        saveDocument()
      }, 2000) // Auto-save after 2 seconds of inactivity

      return () => clearTimeout(timer)
    }
  }, [markdown, title, saveDocument, hasBeenManuallySaved])

  // Manual save with Ctrl+S
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault()
        manualSave()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [manualSave])

  const exportMarkdown = () => {
    const blob = new Blob([markdown], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.md`
    a.click()
    URL.revokeObjectURL(url)
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(markdown)
      alert('Content copied to clipboard!')
    } catch (err) {
      console.error('Failed to copy content:', err)
    }
  }

  const newDocument = () => {
    if (markdown.trim() && confirm('Start a new document? Any unsaved changes will be lost.')) {
      navigate('/editor')
      window.location.reload()
    } else if (!markdown.trim()) {
      navigate('/editor')
      window.location.reload()
    }
  }

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      {/* Document Header */}
      <div style={{ backgroundColor: 'white', borderBottom: '1px solid #e2e8f0', padding: '1rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Document title..."
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  border: 'none',
                  background: 'transparent',
                  color: '#2d3748',
                  width: '100%',
                  outline: 'none'
                }}
              />
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
                <span style={{ 
                  fontSize: '0.875rem', 
                  color: savedStatus === 'saved' ? '#10b981' : savedStatus === 'saving' ? '#f59e0b' : '#ef4444' 
                }}>
                  {savedStatus === 'saved' ? '✅ Saved' : savedStatus === 'saving' ? '⏳ Saving...' : '⚠️ Unsaved changes'}
                </span>
                {!hasBeenManuallySaved && (
                  <span style={{ fontSize: '0.875rem', color: '#f59e0b' }}>
                    📝 Press Ctrl+S or Save to enable auto-save
                  </span>
                )}
                <span style={{ fontSize: '0.875rem', color: '#718096' }}>
                  {wordCount} words
                </span>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button
                onClick={newDocument}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#f7fafc',
                  color: '#4a5568',
                  border: '1px solid #e2e8f0',
                  borderRadius: '0.375rem',
                  cursor: 'pointer',
                  fontSize: '0.875rem'
                }}
              >
                📄 New
              </button>
              <button
                onClick={() => navigate('/documents')}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#f7fafc',
                  color: '#4a5568',
                  border: '1px solid #e2e8f0',
                  borderRadius: '0.375rem',
                  cursor: 'pointer',
                  fontSize: '0.875rem'
                }}
              >
                📁 Documents
              </button>
              <button
                onClick={manualSave}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: hasBeenManuallySaved ? '#f7fafc' : '#667eea',
                  color: hasBeenManuallySaved ? '#4a5568' : 'white',
                  border: hasBeenManuallySaved ? '1px solid #e2e8f0' : 'none',
                  borderRadius: '0.375rem',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: hasBeenManuallySaved ? 'normal' : '500'
                }}
              >
                💾 Save {!hasBeenManuallySaved && '(Ctrl+S)'}
              </button>
              <button
                onClick={copyToClipboard}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#f7fafc',
                  color: '#4a5568',
                  border: '1px solid #e2e8f0',
                  borderRadius: '0.375rem',
                  cursor: 'pointer',
                  fontSize: '0.875rem'
                }}
              >
                📋 Copy
              </button>
              <button
                onClick={exportMarkdown}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#667eea',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.375rem',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}
              >
                💾 Export
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Editor */}
      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="editor-container">
          <div style={{ padding: '2rem' }}>
            <MDXEditor
              key={docId || 'new'} // Force re-render when switching documents
              markdown={markdown}
              onChange={setMarkdown}
              plugins={plugins}
              contentEditableClassName="prose prose-lg max-w-none"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editor
