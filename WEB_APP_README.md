# Smart Markdown Editor Web App

This is a showcase web application for the Smart Markdown Editor React component library. The app demonstrates the full capabilities of the editor with multiple examples and live demos.

## 🚀 Quick Start

### Development
```bash
npm run dev:app
```

### Build for Production
```bash
npm run build:app
```

### Preview Production Build
```bash
npm run preview:app
```

## 📁 Project Structure

```
SmartMarkdownEditor/
├── src/                 # React component library source
├── app/                 # Web application source
│   ├── components/      # App-specific components
│   ├── pages/          # Route pages
│   ├── main.tsx        # App entry point
│   └── index.html      # HTML template
├── dist/               # Built component library
├── dist-app/           # Built web application
└── vite.app.config.ts  # Vite config for web app
```

## 🎯 Features

The web app includes:

- **Home Page**: Introduction and feature overview
- **Live Demo**: Full-featured editor with all plugins enabled
- **Examples**: Different editor configurations for various use cases
- **About**: Technical details and documentation

## 🔧 Development vs Library

This workspace now supports both:

1. **Component Library** (original purpose)
   - `npm run dev` - Development with Ladle
   - `npm run build` - Build library for npm publication

2. **Web Application** (new addition)
   - `npm run dev:app` - Development server for web app
   - `npm run build:app` - Build web app for deployment

## 🌐 Deployment

The web app can be deployed to any static hosting service:

1. Build the app: `npm run build:app`
2. Deploy the `dist-app/` folder to your hosting service
3. Configure your server to serve `index.html` for all routes (SPA mode)

### Popular Deployment Options

- **Vercel**: Connect your GitHub repo and deploy automatically
- **Netlify**: Drag and drop the `dist-app` folder
- **GitHub Pages**: Use GitHub Actions to build and deploy
- **Firebase Hosting**: Use Firebase CLI to deploy

## 🎨 Customization

You can customize the web app by:

- Modifying pages in `app/pages/`
- Adding new routes in `app/App.tsx`
- Updating styles in `app/index.css`
- Adding new examples in the Examples page

## 📚 Editor Features Demonstrated

The web app showcases all editor features:

- ✅ Rich text toolbar
- ✅ Headings (H1-H6)
- ✅ Text formatting (bold, italic, underline)
- ✅ Lists (ordered, unordered, nested, task lists)
- ✅ Links and link dialog
- ✅ Images with upload support
- ✅ Tables with inline editing
- ✅ Code blocks with syntax highlighting
- ✅ Live code preview (Sandpack)
- ✅ Blockquotes
- ✅ Thematic breaks
- ✅ Front matter (YAML)
- ✅ Directives and admonitions
- ✅ Diff/source view
- ✅ Markdown shortcuts
- ✅ Search and replace
- ✅ Undo/redo
- ✅ Responsive design
- ✅ Accessibility support

## 🔗 Links

- [Component Library Documentation](https://mdxeditor.dev/)
- [GitHub Repository](https://github.com/mdx-editor/editor)
- [npm Package](https://www.npmjs.com/package/@mdxeditor/editor)
