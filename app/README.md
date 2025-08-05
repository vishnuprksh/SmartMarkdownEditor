# Smart Markdown Editor - Web Application

This web application showcases the Smart Markdown Editor component as a full-featured article writing platform.

## Features

### 🖊️ Article Editor
- Full-featured markdown editor with WYSIWYG interface
- Auto-save to local storage
- Draft management (save/load drafts)
- Real-time save status indication
- Distraction-free writing environment

### 🎨 User Interface
- Clean, modern design optimized for writing
- Responsive layout that works on all devices
- Sticky header with quick actions
- Writing tips and keyboard shortcuts
- Professional article editing experience

### 📝 Writing Features
- Rich text toolbar with all editing tools
- Markdown shortcuts for faster writing
- Support for:
  - Headings and text formatting
  - Lists and blockquotes
  - Links and images
  - Tables and code blocks
  - Custom directives and components
  - Live code preview with Sandpack

## Pages

1. **Home** - Landing page with features overview
2. **Editor** - Main article writing interface
3. **Examples** - Different editor configurations and demos
4. **About** - Technical details and documentation

## Development

### Start the web app
```bash
npm run dev:app
```

### Build for production
```bash
npm run build:app
```

### Preview production build
```bash
npm run preview:app
```

## Technical Stack

- **React 18+** with TypeScript
- **Vite** for build tooling
- **React Router** for navigation
- **Smart Markdown Editor** (this library) for editing
- **Lexical** as the underlying editor framework

## File Structure

```
app/
├── index.html              # HTML template
└── src/app/
    ├── main.tsx            # App entry point
    ├── App.tsx             # Main app component with routing
    ├── index.css           # Global styles
    ├── components/
    │   └── Layout.tsx      # Navigation and layout
    └── pages/
        ├── Home.tsx        # Landing page
        ├── Demo.tsx        # Article editor (main editor page)
        ├── Examples.tsx    # Editor examples and configurations
        └── About.tsx       # About and documentation
```

## Customization

The web app demonstrates how to:
- Integrate the markdown editor into a full application
- Implement save/load functionality
- Create a professional writing interface
- Handle editor state and user interactions
- Build a responsive editing experience

You can use this as a starting point for your own markdown-based applications or content management systems.
