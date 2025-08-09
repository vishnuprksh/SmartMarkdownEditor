import React from 'react'
import { realmPlugin } from '../../RealmWithPlugins'
import { Cell, useCellValue } from '@mdxeditor/gurx'
import { addTopAreaChild$, addBottomAreaChild$ } from '../core'
import { AIToolbar } from './AIToolbar'
import { initializeGeminiService } from './geminiService'

/**
 * Holds the API key for the Gemini AI service
 * @group AI
 */
export const aiApiKey$ = Cell<string>('')

/**
 * Indicates whether the AI features are enabled
 * @group AI
 */
export const aiEnabled$ = Cell<boolean>(false)

/**
 * The position where to place the AI toolbar button
 * @group AI
 */
export const aiToolbarPosition$ = Cell<'top' | 'bottom'>('top')

/**
 * A plugin that adds AI-powered content generation and editing capabilities using Google's Gemini AI.
 * 
 * @example
 * ```tsx
 * const plugins = [
 *   aiPlugin({
 *     apiKey: 'your-gemini-api-key',
 *     enabled: true
 *   })
 * ]
 * ```
 * 
 * @group AI
 */
export const aiPlugin = realmPlugin<{
  /**
   * Your Google Gemini API key
   */
  apiKey: string
  /**
   * Whether AI features are enabled (default: true)
   */
  enabled?: boolean
  /**
   * Position of the AI toolbar button (default: 'top')
   */
  toolbarPosition?: 'top' | 'bottom'
}>({
  init(realm, params) {
    if (!params?.apiKey) {
      console.warn('AI Plugin: No API key provided. AI features will be disabled.')
      return
    }

    const enabled = params.enabled !== false
    const toolbarPosition = params.toolbarPosition || 'top'

    // Initialize the Gemini service
    try {
      initializeGeminiService(params.apiKey)
      console.log('AI Plugin: Gemini service initialized successfully')
    } catch (error) {
      console.error('AI Plugin: Failed to initialize Gemini service:', error)
      return
    }

    realm.pubIn({
      [aiApiKey$]: params.apiKey,
      [aiEnabled$]: enabled,
      [aiToolbarPosition$]: toolbarPosition
    })

    if (enabled) {
      // Add AI toolbar to the editor
      const addToAreaSignal = toolbarPosition === 'top' ? addTopAreaChild$ : addBottomAreaChild$
      
      realm.pub(addToAreaSignal, () => {
        const apiKey = useCellValue(aiApiKey$)
        const isEnabled = useCellValue(aiEnabled$)
        
        if (!isEnabled || !apiKey) {
          return null
        }

        return <AIToolbar apiKey={apiKey} />
      })
    }
  },

  update(realm, params) {
    if (!params?.apiKey) {
      realm.pubIn({
        [aiEnabled$]: false
      })
      return
    }

    const enabled = params.enabled !== false
    const toolbarPosition = params.toolbarPosition || 'top'

    // Re-initialize the service if the API key changed
    try {
      initializeGeminiService(params.apiKey)
    } catch (error) {
      console.error('AI Plugin: Failed to update Gemini service:', error)
      realm.pub(aiEnabled$, false)
      return
    }

    realm.pubIn({
      [aiApiKey$]: params.apiKey,
      [aiEnabled$]: enabled,
      [aiToolbarPosition$]: toolbarPosition
    })
  }
})

// Export utility functions and types
export { getGeminiService, GeminiService } from './geminiService'
export { AIToolbar } from './AIToolbar'
export type { AIToolbarProps } from './AIToolbar'
