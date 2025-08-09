# AI Plugin Integration Guide

This guide shows how to integrate Google's Gemini Flash 2.0 AI into the Smart Markdown Editor.

## Features

- **Content Generation**: Generate new content from topics or prompts
- **Text Improvement**: Enhance existing text for clarity and quality
- **Continue Writing**: Let AI continue from where you left off
- **Text Summarization**: Generate summaries of selected content
- **Tone Adjustment**: Rewrite text in different tones (formal, casual, professional)

## Installation

The AI plugin is included with the Smart Markdown Editor. You just need a Google Gemini API key.

### Get a Gemini API Key

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Create a new API key
3. Keep it secure - it will be used in your application

## Basic Usage

```tsx
import { 
  MDXEditor, 
  aiPlugin, 
  toolbarPlugin,
  headingsPlugin,
  listsPlugin 
} from '@mdxeditor/editor'

const plugins = [
  // Core plugins
  headingsPlugin(),
  listsPlugin(),
  
  // AI Plugin
  aiPlugin({
    apiKey: 'your-gemini-api-key', // Replace with your actual API key
    enabled: true,
    toolbarPosition: 'top'
  }),
  
  // Toolbar
  toolbarPlugin({
    toolbarContents: () => (
      <div>
        {/* The AI button will be automatically added */}
        Other toolbar content...
      </div>
    )
  })
]

export const MyEditor = () => {
  return (
    <MDXEditor
      markdown="# Start writing..."
      plugins={plugins}
    />
  )
}
```

## Plugin Configuration

```tsx
aiPlugin({
  apiKey: string,           // Required: Your Gemini API key
  enabled?: boolean,        // Optional: Enable/disable AI features (default: true)
  toolbarPosition?: 'top' | 'bottom'  // Optional: Position of AI button (default: 'top')
})
```

## Security Considerations

- **API Key Storage**: The API key is stored only in browser memory during the session
- **HTTPS Only**: Always use HTTPS in production to protect API communications
- **Environment Variables**: In production, consider loading the API key from environment variables
- **Rate Limiting**: Be aware of Gemini API rate limits for your application

## Production Example

```tsx
// Load API key from environment variable
const aiApiKey = process.env.VITE_GEMINI_API_KEY || import.meta.env.VITE_GEMINI_API_KEY

const plugins = [
  // ... other plugins
  aiPlugin({
    apiKey: aiApiKey,
    enabled: Boolean(aiApiKey), // Only enable if API key is available
  }),
]
```

## Environment Setup

Create a `.env.local` file in your project root:

```env
VITE_GEMINI_API_KEY=your_actual_api_key_here
```

## Available AI Actions

1. **Generate Content**: Create new content from a topic or prompt
2. **Improve Text**: Enhance selected text quality and clarity
3. **Continue Writing**: Continue writing from the selected text
4. **Summarize**: Create a summary of selected text
5. **Make Formal**: Rewrite in a formal tone
6. **Make Casual**: Rewrite in a casual tone
7. **Make Professional**: Rewrite in a professional tone

## How to Use

1. Click the **AI** button in the editor toolbar
2. Select an action from the dropdown menu
3. For actions requiring text selection, first select some text in the editor
4. Follow the prompts and let AI enhance your content

## Demo

Run the AI demo to see all features in action:

```bash
npm run dev:ai-demo
```

This will start a development server with a full demonstration of the AI capabilities.

## Troubleshooting

### Common Issues

1. **"Gemini service not initialized"**
   - Make sure you've provided a valid API key
   - Check that the API key has the correct permissions

2. **"Failed to generate text"**
   - Verify your API key is active and has quota remaining
   - Check your internet connection
   - Ensure you're not hitting rate limits

3. **AI button not appearing**
   - Ensure the `aiPlugin` is included in your plugins array
   - Check that `enabled` is not set to `false`
   - Verify the API key is provided

### API Key Validation

The plugin automatically validates your API key on initialization. Check the browser console for any error messages if the AI features aren't working.

## Support

For issues specific to the AI integration, please check:
- Google AI Studio documentation
- Gemini API status page
- Your API key quota and permissions
