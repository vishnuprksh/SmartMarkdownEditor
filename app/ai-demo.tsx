import React from 'react'
import { createRoot } from 'react-dom/client'
import { AiExample } from '../src/examples/ai-assistant'
import './ai-demo.css'

const AiDemo: React.FC = () => {
  return (
    <div className="ai-demo-container">
      <header className="ai-demo-header">
        <div className="header-content">
          <h1>Smart Markdown Editor</h1>
          <p>AI-Powered Writing Assistant with Google Gemini Flash 2.0</p>
        </div>
      </header>
      
      <main className="ai-demo-main">
        <AiExample />
      </main>
      
      <footer className="ai-demo-footer">
        <p>Built with MDXEditor • Powered by Google Gemini Flash 2.0</p>
      </footer>
    </div>
  )
}

// Initialize the demo app
const container = document.getElementById('ai-demo-root')
if (container) {
  const root = createRoot(container)
  root.render(<AiDemo />)
}
