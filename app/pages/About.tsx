import React, { useState } from 'react'

const Help: React.FC = () => {
  const [activeSection, setActiveSection] = useState('getting-started')

  const sections = {
    'getting-started': {
      title: 'Getting Started',
      icon: '🚀',
      content: (
        <div>
          <h3>Welcome to Smart Markdown Editor!</h3>
          <p>Smart Markdown Editor is a powerful markdown editor that makes writing and formatting documents easy and intuitive.</p>
          
          <h4>Creating Your First Document</h4>
          <ol>
            <li>Click <strong>"+ New Document"</strong> on the Documents page</li>
            <li>Start typing in the editor - formatting happens automatically!</li>
            <li>Your document auto-saves as you type</li>
            <li>Use the toolbar for advanced formatting options</li>
          </ol>

          <h4>Key Features</h4>
          <ul>
            <li><strong>WYSIWYG Editing:</strong> See formatting as you type</li>
            <li><strong>Auto-save:</strong> Never lose your work</li>
            <li><strong>Templates:</strong> Start with pre-built document structures</li>
            <li><strong>Export Options:</strong> Download as Markdown or copy to clipboard</li>
          </ul>
        </div>
      )
    },
    'formatting': {
      title: 'Formatting Guide',
      icon: '✏️',
      content: (
        <div>
          <h3>Text Formatting</h3>
          <div style={{ backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
            <p><strong>Bold text:</strong> **bold** or __bold__</p>
            <p><em>Italic text:</em> *italic* or _italic_</p>
            <p><code>Inline code:</code> `code`</p>
            <p><del>Strikethrough:</del> ~~strikethrough~~</p>
          </div>

          <h3>Headings</h3>
          <div style={{ backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
            <p># Heading 1</p>
            <p>## Heading 2</p>
            <p>### Heading 3</p>
            <p>#### Heading 4</p>
          </div>

          <h3>Lists</h3>
          <div style={{ backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
            <p><strong>Unordered list:</strong></p>
            <p>- Item 1</p>
            <p>- Item 2</p>
            <p>&nbsp;&nbsp;- Nested item</p>
            <br/>
            <p><strong>Ordered list:</strong></p>
            <p>1. First item</p>
            <p>2. Second item</p>
            <p>&nbsp;&nbsp;1. Nested item</p>
          </div>

          <h3>Links and Images</h3>
          <div style={{ backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
            <p><strong>Link:</strong> [Link text](https://example.com)</p>
            <p><strong>Image:</strong> ![Alt text](image-url.jpg)</p>
          </div>
        </div>
      )
    },
    'shortcuts': {
      title: 'Keyboard Shortcuts',
      icon: '⌨️',
      content: (
        <div>
          <h3>Essential Shortcuts</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <h4>Text Formatting</h4>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '0.5rem 0' }}><strong>Ctrl + B</strong></td>
                    <td style={{ padding: '0.5rem 0' }}>Bold</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '0.5rem 0' }}><strong>Ctrl + I</strong></td>
                    <td style={{ padding: '0.5rem 0' }}>Italic</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '0.5rem 0' }}><strong>Ctrl + K</strong></td>
                    <td style={{ padding: '0.5rem 0' }}>Insert Link</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '0.5rem 0' }}><strong>Ctrl + `</strong></td>
                    <td style={{ padding: '0.5rem 0' }}>Inline Code</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h4>Document Actions</h4>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '0.5rem 0' }}><strong>Ctrl + S</strong></td>
                    <td style={{ padding: '0.5rem 0' }}>Save Document</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '0.5rem 0' }}><strong>Ctrl + Z</strong></td>
                    <td style={{ padding: '0.5rem 0' }}>Undo</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '0.5rem 0' }}><strong>Ctrl + Y</strong></td>
                    <td style={{ padding: '0.5rem 0' }}>Redo</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '0.5rem 0' }}><strong>Ctrl + F</strong></td>
                    <td style={{ padding: '0.5rem 0' }}>Find in Document</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h3>Quick Text Shortcuts</h3>
          <p>These shortcuts work as you type:</p>
          <div style={{ backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '0.5rem' }}>
            <p><strong>##</strong> + space → Heading 2</p>
            <p><strong>-</strong> + space → Bullet list</p>
            <p><strong>1.</strong> + space → Numbered list</p>
            <p><strong>&gt;</strong> + space → Blockquote</p>
            <p><strong>```</strong> + language → Code block</p>
          </div>
        </div>
      )
    },
    'tables': {
      title: 'Working with Tables',
      icon: '📊',
      content: (
        <div>
          <h3>Creating Tables</h3>
          <p>Tables are easy to create and edit in Smart Markdown Editor. You can use the toolbar button or type the markdown syntax:</p>
          
          <div style={{ backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
            <pre style={{ margin: 0, fontSize: '0.875rem' }}>
{`| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |`}
            </pre>
          </div>

          <h3>Table Features</h3>
          <ul>
            <li><strong>Add Rows:</strong> Click the + button or press Tab in the last cell</li>
            <li><strong>Add Columns:</strong> Use the column menu in the table toolbar</li>
            <li><strong>Delete Rows/Columns:</strong> Right-click for context menu</li>
            <li><strong>Sort Data:</strong> Click column headers to sort</li>
            <li><strong>Alignment:</strong> Use :--- for left, :---: for center, ---: for right</li>
          </ul>

          <h3>Advanced Table Tips</h3>
          <div style={{ backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
            <p><strong>💡 Pro Tip:</strong> You can paste data from Excel or Google Sheets directly into the editor, and it will automatically create a table!</p>
          </div>
        </div>
      )
    },
    'troubleshooting': {
      title: 'Troubleshooting',
      icon: '🔧',
      content: (
        <div>
          <h3>Common Issues</h3>
          
          <div style={{ marginBottom: '2rem' }}>
            <h4>Document Not Saving</h4>
            <ul>
              <li>Check your internet connection</li>
              <li>Try refreshing the page</li>
              <li>Documents are auto-saved to your browser's local storage</li>
              <li>Use Ctrl+S to manually save</li>
            </ul>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>Formatting Not Working</h4>
            <ul>
              <li>Make sure you're using the correct markdown syntax</li>
              <li>Check that there are no extra spaces</li>
              <li>Try using the toolbar buttons instead</li>
              <li>Some formatting requires specific plugin support</li>
            </ul>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>Performance Issues</h4>
            <ul>
              <li>Large documents (&gt;10,000 words) may be slower</li>
              <li>Try closing other browser tabs</li>
              <li>Clear your browser cache</li>
              <li>Restart your browser</li>
            </ul>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>Lost Documents</h4>
            <ul>
              <li>Check your Documents page - they might be auto-saved</li>
              <li>Documents are stored locally in your browser</li>
              <li>Clearing browser data will remove saved documents</li>
              <li>Always export important documents as backup</li>
            </ul>
          </div>

          <h3>Getting More Help</h3>
          <div style={{ backgroundColor: '#e3f2fd', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #90caf9' }}>
            <p><strong>Need more help?</strong> Smart Markdown Editor is built on the robust MDXEditor framework. For advanced technical questions, you can refer to the original documentation or community resources.</p>
          </div>
        </div>
      )
    }
  }

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', paddingTop: '2rem' }}>
      <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 className="section-title">Help &amp; Documentation</h1>
          <p className="section-subtitle">
            Everything you need to know to get the most out of Smart Markdown Editor
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          {/* Sidebar Navigation */}
          <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', height: 'fit-content' }}>
            <h3 style={{ margin: '0 0 1rem 0', color: '#2d3748', fontSize: '1.125rem' }}>Topics</h3>
            <nav>
              {Object.entries(sections).map(([key, section]) => (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '0.75rem',
                    marginBottom: '0.5rem',
                    border: 'none',
                    borderRadius: '0.375rem',
                    backgroundColor: activeSection === key ? '#667eea' : 'transparent',
                    color: activeSection === key ? 'white' : '#4a5568',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span style={{ marginRight: '0.5rem' }}>{section.icon}</span>
                  {section.title}
                </button>
              ))}
            </nav>
          </div>

          {/* Content Area */}
          <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '1.5rem', marginRight: '0.75rem' }}>
                {sections[activeSection as keyof typeof sections].icon}
              </span>
              <h2 style={{ margin: 0, color: '#2d3748', fontSize: '1.5rem', fontWeight: '600' }}>
                {sections[activeSection as keyof typeof sections].title}
              </h2>
            </div>
            
            <div style={{ lineHeight: '1.6', color: '#4a5568' }}>
              {sections[activeSection as keyof typeof sections].content}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Help
