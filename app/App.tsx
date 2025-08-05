import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Editor from './pages/Editor'
import Templates from './pages/Examples'
import Help from './pages/About'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Editor />} />
        <Route path="/documents" element={<Home />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/help" element={<Help />} />
        {/* Legacy routes for backward compatibility */}
        <Route path="/editor" element={<Editor />} />
        <Route path="/demo" element={<Editor />} />
        <Route path="/examples" element={<Templates />} />
        <Route path="/about" element={<Help />} />
      </Routes>
    </Layout>
  )
}

export default App
