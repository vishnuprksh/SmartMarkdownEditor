import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Templates: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const templates = [
    {
      id: 'blog-post',
      title: 'Blog Post',
      description: 'Professional blog post template with front matter and structure',
      category: 'writing',
      content: `---
title: "Your Blog Post Title"
author: "Your Name"
date: ${new Date().toISOString().split('T')[0]}
tags: ["technology", "tutorial"]
---

# Your Blog Post Title

## Introduction

Write an engaging introduction that hooks your readers and explains what they'll learn.

## Main Content

### Section 1

Explain your first main point with examples and details.

### Section 2

Continue with your second point. Use:

- **Bold text** for emphasis
- *Italic text* for subtle emphasis
- \`inline code\` for technical terms

### Code Examples

\`\`\`javascript
// Add code examples to illustrate your points
function example() {
  console.log("Hello, World!");
}
\`\`\`

## Conclusion

Summarize your key points and provide a call to action.

---

*What did you think of this post? Let me know in the comments!*`
    },
    {
      id: 'meeting-notes',
      title: 'Meeting Notes',
      description: 'Structured template for capturing meeting discussions and action items',
      category: 'business',
      content: `# Meeting Notes - [Meeting Title]

**Date:** ${new Date().toLocaleDateString()}
**Time:** [Start Time] - [End Time]
**Location:** [Location/Video Link]

## Attendees
- [ ] Person 1 (Role)
- [ ] Person 2 (Role)
- [ ] Person 3 (Role)

## Agenda
1. Review previous action items
2. [Agenda Item 1]
3. [Agenda Item 2]
4. Next steps

## Discussion Points

### [Topic 1]
- Key discussion points
- Decisions made
- Concerns raised

### [Topic 2]
- Additional notes
- Questions that came up

## Action Items
- [ ] **[Person Name]** - [Action item] - Due: [Date]
- [ ] **[Person Name]** - [Action item] - Due: [Date]
- [ ] **[Person Name]** - [Action item] - Due: [Date]

## Next Meeting
**Date:** [Next meeting date]
**Topics:** [Preview of next meeting topics]`
    },
    {
      id: 'project-readme',
      title: 'Project README',
      description: 'Comprehensive README template for software projects',
      category: 'technical',
      content: `# Project Name

> Brief description of what your project does

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)]()

## Features

- ✨ Feature 1
- 🚀 Feature 2
- 💡 Feature 3

## Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/username/project-name.git

# Install dependencies
npm install

# Start development server
npm start
\`\`\`

## Usage

\`\`\`javascript
import { ProjectName } from 'project-name'

const example = new ProjectName({
  option1: 'value1',
  option2: 'value2'
})
\`\`\`

## API Reference

### \`method(param1, param2)\`

Description of what this method does.

**Parameters:**
- \`param1\` (string) - Description of parameter
- \`param2\` (number) - Description of parameter

**Returns:** Description of return value

## Contributing

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.`
    },
    {
      id: 'article',
      title: 'Article/Essay',
      description: 'Academic or professional article template with proper structure',
      category: 'writing',
      content: `# Article Title

**Abstract:** Write a brief summary of your article's main points and conclusions.

## Introduction

Introduce your topic and provide context for your readers. Explain why this topic is important and what you aim to accomplish in this article.

## Background

Provide necessary background information and related work. This helps readers understand the foundation of your discussion.

## Main Arguments

### Point 1: [Your First Argument]

Present your first main argument with supporting evidence:

- Supporting fact 1
- Supporting fact 2
- Relevant examples

> "Include relevant quotes or citations to strengthen your argument."

### Point 2: [Your Second Argument]

Continue with your second point:

1. Logical progression
2. Evidence and examples
3. Connection to your thesis

### Point 3: [Your Third Argument]

Complete your argumentation with your strongest point.

## Analysis

Analyze the implications of your arguments. How do they connect? What do they mean for your readers?

## Conclusion

Summarize your key points and provide:
- Final thoughts
- Implications for the future
- Call to action or next steps

## References

- Reference 1
- Reference 2
- Reference 3

---

*Published on ${new Date().toLocaleDateString()}*`
    },
    {
      id: 'recipe',
      title: 'Recipe',
      description: 'Detailed recipe template with ingredients and instructions',
      category: 'personal',
      content: `# Recipe Name

*Serves: 4 people | Prep time: 15 minutes | Cook time: 30 minutes*

## Description

Brief description of the dish - what makes it special, when to serve it, or any interesting background.

## Ingredients

### Main Ingredients
- [ ] 2 cups ingredient 1
- [ ] 1 lb ingredient 2
- [ ] 3 tbsp ingredient 3
- [ ] 1 tsp ingredient 4

### For the Sauce/Seasoning
- [ ] 1/4 cup ingredient 5
- [ ] 2 cloves garlic, minced
- [ ] Salt and pepper to taste

## Instructions

### Preparation
1. **Prep ingredients:** Wash, chop, and measure all ingredients
2. **Preheat** oven/pan to [temperature]

### Cooking
1. **Step 1:** Detailed instruction for first step
2. **Step 2:** Continue with second step, including timing
3. **Step 3:** Add more steps as needed

### Finishing
1. **Final touches:** Last steps before serving
2. **Plating:** How to present the dish

## Tips & Variations

- 💡 **Pro tip:** Helpful cooking advice
- 🔄 **Variation:** How to modify the recipe
- 🗄️ **Storage:** How to store leftovers

## Nutrition Information (Optional)
- Calories: ~XXX per serving
- Key nutrients or dietary notes

---

*Recipe adapted from [source] or original creation*`
    },
    {
      id: 'report',
      title: 'Business Report',
      description: 'Professional business report template with executive summary',
      category: 'business',
      content: `# [Report Title]

**Prepared by:** [Your Name]
**Date:** ${new Date().toLocaleDateString()}
**Department:** [Department Name]

## Executive Summary

Provide a concise overview of the report's key findings, recommendations, and implications. This should be readable as a standalone section.

**Key Findings:**
- Finding 1
- Finding 2
- Finding 3

**Recommendations:**
- Recommendation 1
- Recommendation 2
- Recommendation 3

## Introduction

### Purpose
Explain why this report was created and what questions it aims to answer.

### Scope
Define what is and isn't covered in this report.

### Methodology
Brief overview of how data was collected and analyzed.

## Findings

### Section 1: [Topic Area]

Present your first set of findings with supporting data:

| Metric | Current | Target | Variance |
|--------|---------|--------|----------|
| KPI 1  | X       | Y      | +/-Z     |
| KPI 2  | X       | Y      | +/-Z     |

**Analysis:** Explain what these numbers mean.

### Section 2: [Topic Area]

Continue with additional findings and analysis.

## Recommendations

Based on the findings, recommend specific actions:

### Immediate Actions (0-30 days)
1. **Action 1:** Description and rationale
2. **Action 2:** Description and rationale

### Short-term Actions (1-3 months)
1. **Action 1:** Description and expected impact
2. **Action 2:** Description and expected impact

### Long-term Actions (3+ months)
1. **Strategic initiative 1**
2. **Strategic initiative 2**

## Implementation Plan

### Timeline
- Week 1-2: [Activities]
- Week 3-4: [Activities]
- Month 2: [Activities]

### Resources Required
- Personnel: [Requirements]
- Budget: [Estimates]
- Technology: [Needs]

### Success Metrics
- Metric 1: [Target]
- Metric 2: [Target]
- Metric 3: [Target]

## Conclusion

Summarize the report and emphasize the importance of acting on the recommendations.

## Appendices

### Appendix A: Detailed Data
[Additional charts, tables, or raw data]

### Appendix B: Methodology Details
[Detailed explanation of research methods]`
    }
  ]

  const categories = [
    { id: 'all', name: 'All Templates', icon: '📄' },
    { id: 'writing', name: 'Writing', icon: '✍️' },
    { id: 'business', name: 'Business', icon: '💼' },
    { id: 'technical', name: 'Technical', icon: '⚙️' },
    { id: 'personal', name: 'Personal', icon: '👤' }
  ]

  const filteredTemplates = selectedCategory === 'all' 
    ? templates 
    : templates.filter(template => template.category === selectedCategory)

  const createDocumentFromTemplate = (template: typeof templates[0]) => {
    const newDoc = {
      id: Date.now().toString(),
      title: template.title + ' - ' + new Date().toLocaleDateString(),
      content: template.content,
      lastModified: new Date(),
      wordCount: template.content.trim().split(/\s+/).length
    }

    // Save to localStorage
    const existingDocs = JSON.parse(localStorage.getItem('markdown-documents') || '[]')
    const updatedDocs = [newDoc, ...existingDocs]
    localStorage.setItem('markdown-documents', JSON.stringify(updatedDocs))

    // Navigate to editor with the new document
    window.location.href = `/?doc=${newDoc.id}`
  }

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', paddingTop: '2rem' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 className="section-title">Document Templates</h1>
          <p className="section-subtitle">
            Get started quickly with professionally designed templates for common document types
          </p>
        </div>

        {/* Category Filter */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '2rem',
                  border: '1px solid #e2e8f0',
                  backgroundColor: selectedCategory === category.id ? '#667eea' : 'white',
                  color: selectedCategory === category.id ? 'white' : '#4a5568',
                  cursor: 'pointer',
                  fontWeight: '500',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              style={{
                backgroundColor: 'white',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e2e8f0',
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
                  fontWeight: '600'
                }}>
                  {template.title}
                </h3>
                <p style={{ 
                  margin: 0, 
                  color: '#718096', 
                  fontSize: '0.875rem',
                  lineHeight: '1.5'
                }}>
                  {template.description}
                </p>
              </div>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '1rem'
              }}>
                <span style={{ 
                  padding: '0.25rem 0.75rem',
                  backgroundColor: '#f7fafc',
                  color: '#4a5568',
                  borderRadius: '1rem',
                  fontSize: '0.75rem',
                  fontWeight: '500'
                }}>
                  {categories.find(c => c.id === template.category)?.name}
                </span>
                <span style={{ color: '#718096', fontSize: '0.875rem' }}>
                  ~{template.content.trim().split(/\s+/).length} words
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={() => createDocumentFromTemplate(template)}
                  style={{
                    flex: 1,
                    padding: '0.75rem 1rem',
                    backgroundColor: '#667eea',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.375rem',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#5a67d8'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#667eea'}
                >
                  Use Template
                </button>
                <button
                  onClick={() => {
                    // Show preview modal or expand preview
                    alert('Preview coming soon! Click "Use Template" to create a document with this template.')
                  }}
                  style={{
                    padding: '0.75rem',
                    backgroundColor: '#f7fafc',
                    color: '#4a5568',
                    border: '1px solid #e2e8f0',
                    borderRadius: '0.375rem',
                    cursor: 'pointer',
                    fontSize: '0.875rem'
                  }}
                >
                  👁️
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <div style={{ 
            textAlign: 'center', 
            padding: '4rem 2rem',
            backgroundColor: 'white',
            borderRadius: '1rem',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📄</div>
            <h3 style={{ color: '#2d3748', marginBottom: '1rem' }}>
              No templates found
            </h3>
            <p style={{ color: '#718096', marginBottom: '2rem' }}>
              Try selecting a different category to see more templates.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Templates
