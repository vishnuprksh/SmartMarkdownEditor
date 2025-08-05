import React from 'react'
import { Link, useLocation } from 'react-router-dom'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation()

  return (
    <div className="min-h-screen">
      <nav className="nav">
        <div className="container nav-content">
          <Link to="/" className="nav-brand">
            🧠 Smart Markdown Editor
          </Link>
          <ul className="nav-links">
            <li>
              <Link 
                to="/" 
                className={location.pathname === '/' || location.pathname === '/editor' ? 'active' : ''}
              >
                Editor
              </Link>
            </li>
            <li>
              <Link 
                to="/documents" 
                className={location.pathname === '/documents' ? 'active' : ''}
              >
                Documents
              </Link>
            </li>
            <li>
              <Link 
                to="/templates" 
                className={location.pathname === '/templates' ? 'active' : ''}
              >
                Templates
              </Link>
            </li>
            <li>
              <Link 
                to="/help" 
                className={location.pathname === '/help' ? 'active' : ''}
              >
                Help
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  )
}

export default Layout
