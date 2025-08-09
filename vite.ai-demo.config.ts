/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        svgo: true,
        replaceAttrValues: { 'black': 'currentColor' }
      }
    }),
    tsconfigPaths()
  ],
  root: '.',
  resolve: {
    alias: {
      '@mdxeditor/editor': path.resolve(__dirname, 'src'),
      '@mdxeditor/editor/styles/globals.css': path.resolve(__dirname, 'src/styles/globals.css'),
    }
  },
  server: {
    port: 3001,
    open: '/ai-demo.html',
    proxy: {
      '/uploads': 'http://localhost:65432'
    },
  },
  build: {
    outDir: 'dist-ai-demo',
    rollupOptions: {
      input: 'ai-demo.html'
    }
  },
  css: {
    modules: {
      scopeBehaviour: 'local',
      localsConvention: 'camelCaseOnly'
    }
  }
})
