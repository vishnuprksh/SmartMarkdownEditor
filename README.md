# Smart Markdown Editor - Intelligent Rich Text Markdown Editor

A powerful, intelligent markdown editor built with React and Lexical. Transform your writing experience with AI-powered features, true WYSIWYG editing, and seamless workflow integration.

## 🚀 Quick Start

### Launch Smart Markdown Editor Web App
```bash
npm start
# or
npm run dev
```
Opens the full Smart Markdown Editor application at `http://localhost:5174`

### Component Development (Advanced)
```bash
npm run start:components
# or  
npm run dev:components
```
Opens the Ladle component development environment at `http://localhost:61000`

## 📱 Available Commands

| Command | Description |
|---------|-------------|
| `npm start` | **Start Smart Markdown Editor web app** (recommended) |
| `npm run dev` | Start Smart Markdown Editor web app (alias for start) |
| `npm run build:app` | Build Smart Markdown Editor for production deployment |
| `npm run preview:app` | Preview the production build |
| `npm run start:components` | Start component development with Ladle |
| `npm run build` | Build the React component library |
| `npm test` | Run tests |
| `npm run lint` | Run ESLint |

## 🎯 What You Get

### **Smart Markdown Editor Web App** (`npm start`)
- Complete intelligent markdown editing application
- Editor-first experience - opens directly to the editor
- AI-powered writing assistance
- Document management (save/load drafts)
- All advanced features enabled
- Ready for end users

### **Component Library** (`npm run start:components`)
- Development environment for the React components
- Individual component testing
- Plugin development and testing
- For developers extending the library

## 🏗️ Project Structure

```
SmartMarkdownEditor/
├── app/                    # Smart Markdown Editor web application
│   ├── index.html         # App entry point
│   ├── main.tsx           # React app initialization  
│   ├── App.tsx            # Main app with routing
│   ├── components/        # App-specific components
│   └── pages/            # Application pages
├── src/                   # React component library source
├── dist-app/             # Built web application (after build:app)
├── dist/                 # Built component library (after build)
└── vite.app.config.ts    # Vite config for web app
```

## 🎨 Features

### Intelligent Writing Tools
- **AI-Powered Assistance**: Smart suggestions and auto-completion
- **True WYSIWYG**: See formatting as you type
- **Smart Tables**: Spreadsheet-like table editing
- **Code Blocks**: Syntax highlighting for 100+ languages
- **Live Preview**: Instant code execution with Sandpack
- **Rich Media**: Images, links, and multimedia support

### Advanced Capabilities
- **Document Management**: Auto-save, draft management
- **Export Options**: HTML, markdown, PDF ready
- **Keyboard Shortcuts**: Power user shortcuts
- **Responsive Design**: Works on all devices
- **Accessibility**: Full screen reader support

### Developer Features
- **Plugin Architecture**: Extensible and customizable
- **TypeScript**: Full type safety
- **Modern Stack**: React 18+, Vite, Lexical
- **Component Library**: Reusable in other projects

## 🚢 Deployment

### Build for Production
```bash
npm run build:app
```

### Deploy the Web App
The `dist-app/` folder contains the built application ready for deployment to:
- Vercel, Netlify, GitHub Pages
- AWS S3, Azure Static Web Apps
- Any static hosting service

### Use as Component Library
```bash
npm run build
```
The `dist/` folder contains the component library for npm publication.

## 📖 Documentation

- **Write**: Start creating documents immediately
- **Features**: Explore all capabilities and examples  
- **Docs**: Technical documentation and API reference

## 🤝 Contributing

1. Clone the repository
2. Run `npm install`
3. Start development with `npm start`
4. Open `http://localhost:5174` for the web app
5. Make your changes and test
6. Submit a pull request

## 📄 License

MIT © Petyo Ivanov

---

**Smart Markdown Editor** - Where intelligent writing meets modern technology. 🧠✨
