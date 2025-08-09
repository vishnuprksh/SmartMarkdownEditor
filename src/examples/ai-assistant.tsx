import React from 'react'
import { 
  MDXEditor, 
  MDXEditorMethods, 
  aiPlugin, 
  toolbarPlugin, 
  headingsPlugin, 
  listsPlugin, 
  quotePlugin, 
  thematicBreakPlugin,
  linkPlugin,
  linkDialogPlugin,
  imagePlugin,
  tablePlugin,
  codeBlockPlugin,
  codeMirrorPlugin,
  markdownShortcutPlugin,
  type EditorInFocus
} from '../'

const markdown = `# AI-Powered Markdown Editor

Welcome to the Smart Markdown Editor with AI capabilities! This editor is powered by Google's Gemini Flash 2.0 AI.

## Features

- **AI Content Generation**: Create new content from topics or prompts
- **Text Improvement**: Enhance existing text for clarity and quality  
- **Continue Writing**: Let AI continue from where you left off
- **Text Summarization**: Generate summaries of selected content
- **Tone Adjustment**: Rewrite text in different tones (formal, casual, professional)

## How to Use

1. Click the **AI** button in the toolbar to open the AI assistant
2. Select an action from the dropdown menu
3. For actions that require text selection, first select some text in the editor
4. Follow the prompts and let AI enhance your content

## Example Content

### Technology Trends
Select this paragraph and try the "Improve Text" or "Continue Writing" features to see AI in action.

### Sample Code

\`\`\`javascript
// AI can help you write better documentation for your code
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0)
}
\`\`\`

Try selecting the code block above and use AI to generate documentation or explanations.

---

**Note**: This editor uses your provided Gemini API key securely within your browser session.`

const ALL_PLUGINS = [
  // Core functionality
  headingsPlugin(),
  listsPlugin(),
  quotePlugin(),
  thematicBreakPlugin(),
  linkPlugin(),
  linkDialogPlugin(),
  imagePlugin(),
  tablePlugin(),
  codeBlockPlugin({
    defaultCodeBlockLanguage: 'txt'
  }),
  codeMirrorPlugin({ codeBlockLanguages: { js: 'JavaScript', css: 'CSS', txt: 'text' } }),
  markdownShortcutPlugin(),
  
  // AI Plugin - Replace with your actual API key
  aiPlugin({
    apiKey: (import.meta as any).env?.VITE_GEMINI_API_KEY || 'YOUR_GEMINI_API_KEY_HERE',
    enabled: true,
    toolbarPosition: 'top'
  }),
  
  // Toolbar with AI button
  toolbarPlugin({
    toolbarContents: () => (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px',
        padding: '8px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #e9ecef'
      }}>
        {/* The AI button will be automatically added by the aiPlugin */}
        <span style={{ 
          fontSize: '14px', 
          color: '#6c757d',
          marginLeft: '8px' 
        }}>
          Use the AI button to enhance your content with Gemini Flash 2.0
        </span>
      </div>
    )
  })
]

/**
 * An example demonstrating the AI plugin integration with Google Gemini Flash 2.0.
 * 
 * Features:
 * - Content generation from prompts
 * - Text improvement and enhancement
 * - Continuing writing from selected text
 * - Text summarization
 * - Tone adjustment (formal, casual, professional)
 * 
 * @example
 * ```tsx
 * import { aiPlugin } from '@mdxeditor/editor'
 * 
 * const plugins = [
 *   aiPlugin({
 *     apiKey: 'your-gemini-api-key',
 *     enabled: true
 *   }),
 *   // ... other plugins
 * ]
 * ```
 */
export const AiExample: React.FC = () => {
  const ref = React.useRef<MDXEditorMethods>(null)
  const [currentMarkdown, setCurrentMarkdown] = React.useState(markdown)

  const handleChange = (newMarkdown: string) => {
    setCurrentMarkdown(newMarkdown)
  }

  const handleEditorFocus = (editorInFocus: EditorInFocus | null) => {
    console.log('Editor in focus:', editorInFocus)
  }

  return (
    <div style={{ 
      maxWidth: '900px', 
      margin: '0 auto', 
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{ marginBottom: '20px' }}>
        <h1 style={{ color: '#2d3748', marginBottom: '8px' }}>
          AI-Powered Markdown Editor
        </h1>
        <p style={{ color: '#718096', fontSize: '16px', lineHeight: '1.5' }}>
          Experience the power of AI-assisted writing with Google's Gemini Flash 2.0. 
          Select text and use the AI assistant to enhance, continue, or transform your content.
        </p>
      </div>

      <div style={{ 
        border: '2px solid #e2e8f0', 
        borderRadius: '12px',
        overflow: 'hidden',
        backgroundColor: 'white',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
      }}>
        <MDXEditor
          ref={ref}
          markdown={currentMarkdown}
          onChange={handleChange}
          plugins={ALL_PLUGINS}
          contentEditableClassName="prose prose-lg max-w-none"
          placeholder="Start writing your content here..."
        />
      </div>

      <div style={{ 
        marginTop: '20px', 
        padding: '16px',
        backgroundColor: '#f7fafc',
        borderRadius: '8px',
        border: '1px solid #e2e8f0'
      }}>
        <h3 style={{ color: '#2d3748', marginBottom: '12px', fontSize: '18px' }}>
          Quick Start Guide
        </h3>
        <ul style={{ color: '#4a5568', lineHeight: '1.6', margin: 0 }}>
          <li><strong>Generate Content:</strong> Click AI → Generate Content → Enter a topic</li>
          <li><strong>Improve Text:</strong> Select text → Click AI → Improve Text</li>
          <li><strong>Continue Writing:</strong> Select ending text → Click AI → Continue Writing</li>
          <li><strong>Change Tone:</strong> Select text → Click AI → Choose tone (Formal/Casual/Professional)</li>
          <li><strong>Summarize:</strong> Select long text → Click AI → Summarize</li>
        </ul>
      </div>

      <div style={{ 
        marginTop: '16px',
        fontSize: '14px',
        color: '#718096',
        textAlign: 'center'
      }}>
        <p>
          Powered by Google Gemini Flash 2.0 • Your API key is stored securely in your browser session
        </p>
      </div>
    </div>
  )
}

export default AiExample
