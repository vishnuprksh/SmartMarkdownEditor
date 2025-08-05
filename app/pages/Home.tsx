import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface Document {
  id: string
  title: string
  content: string
  lastModified: Date
  wordCount: number
}

const Home: React.FC = () => {
  const [documents, setDocuments] = useState<Document[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    // Load documents from localStorage
    const savedDocuments = localStorage.getItem('markdown-documents')
    if (savedDocuments) {
      const parsed = JSON.parse(savedDocuments)
      setDocuments(parsed.map((doc: any) => ({
        ...doc,
        lastModified: new Date(doc.lastModified)
      })))
    }
  }, [])

  const filteredDocuments = documents.filter(doc =>
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.content.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const getWordCount = (text: string) => {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length
  }

  const formatDate = (date: Date) => {
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
    
    if (diffDays === 0) {
      return `Today at ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
    } else if (diffDays === 1) {
      return 'Yesterday'
    } else if (diffDays < 7) {
      return `${diffDays} days ago`
    } else {
      return date.toLocaleDateString()
    }
  }

  const deleteDocument = (id: string) => {
    const updatedDocs = documents.filter(doc => doc.id !== id)
    setDocuments(updatedDocs)
    localStorage.setItem('markdown-documents', JSON.stringify(updatedDocs))
  }

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div>
            <h1 style={{ margin: 0, color: '#1a202c', fontSize: '2rem', fontWeight: '700' }}>
              Your Documents
            </h1>
            <p style={{ margin: '0.5rem 0 0 0', color: '#718096' }}>
              {documents.length} {documents.length === 1 ? 'document' : 'documents'}
            </p>
          </div>
          <Link 
            to="/" 
            className="cta-button"
            style={{ textDecoration: 'none' }}
          >
            + New Document
          </Link>
        </div>

        {/* Search Bar */}
        <div style={{ marginBottom: '2rem' }}>
          <input
            type="text"
            placeholder="Search documents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              border: '1px solid #e2e8f0',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              backgroundColor: 'white'
            }}
          />
        </div>

        {/* Documents Grid */}
        {filteredDocuments.length > 0 ? (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {filteredDocuments.map((doc) => (
              <div
                key={doc.id}
                style={{
                  backgroundColor: 'white',
                  padding: '1.5rem',
                  borderRadius: '0.75rem',
                  border: '1px solid #e2e8f0',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ marginBottom: '1rem' }}>
                  <h3 style={{ 
                    margin: 0, 
                    marginBottom: '0.5rem',
                    color: '#2d3748', 
                    fontSize: '1.25rem', 
                    fontWeight: '600',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}>
                    {doc.title}
                  </h3>
                  <p style={{ 
                    margin: 0, 
                    color: '#718096', 
                    fontSize: '0.875rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {doc.content.replace(/[#*`>\-\[\]]/g, '').substring(0, 150)}...
                  </p>
                </div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}>
                  <span style={{ color: '#718096', fontSize: '0.875rem' }}>
                    {doc.wordCount} words
                  </span>
                  <span style={{ color: '#718096', fontSize: '0.875rem' }}>
                    {formatDate(doc.lastModified)}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <Link
                    to={`/?doc=${doc.id}`}
                    style={{
                      flex: 1,
                      padding: '0.5rem 1rem',
                      backgroundColor: '#667eea',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '0.375rem',
                      textAlign: 'center',
                      fontSize: '0.875rem',
                      fontWeight: '500'
                    }}
                  >
                    Open
                  </Link>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      if (confirm('Are you sure you want to delete this document?')) {
                        deleteDocument(doc.id)
                      }
                    }}
                    style={{
                      padding: '0.5rem',
                      backgroundColor: '#fed7d7',
                      color: '#c53030',
                      border: 'none',
                      borderRadius: '0.375rem',
                      cursor: 'pointer',
                      fontSize: '0.875rem'
                    }}
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ 
            textAlign: 'center', 
            padding: '4rem 2rem',
            backgroundColor: 'white',
            borderRadius: '1rem',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📝</div>
            <h3 style={{ color: '#2d3748', marginBottom: '1rem' }}>
              {searchQuery ? 'No documents found' : 'No documents yet'}
            </h3>
            <p style={{ color: '#718096', marginBottom: '2rem' }}>
              {searchQuery 
                ? `No documents match "${searchQuery}"`
                : 'Start writing your first document to see it here'
              }
            </p>
            <Link 
              to="/" 
              className="cta-button"
              style={{ textDecoration: 'none' }}
            >
              Create Your First Document
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
