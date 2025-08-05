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
  root: 'app',
  resolve: {
    alias: {
      '@mdxeditor/editor': path.resolve(__dirname, 'src'),
      '@mdxeditor/editor/styles/globals.css': path.resolve(__dirname, 'src/styles/globals.css'),
    }
  },
  server: {
    proxy: {
      '/uploads': 'http://localhost:65432'
    },
  },
  build: {
    outDir: '../dist-app',
    rollupOptions: {
      input: 'app/index.html'
    }
  },
  css: {
    modules: {
      scopeBehaviour: 'local',
      localsConvention: 'camelCaseOnly'
    }
  }
})
