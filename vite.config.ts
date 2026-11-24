import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import type { Plugin } from 'vite'
import { compression } from 'vite-plugin-compression2'

function inlineCss(): Plugin {
  return {
    name: 'inline-css',
    apply: 'build',
    enforce: 'post',
    generateBundle(_, bundle) {
      const html = Object.values(bundle).find((f) => f.fileName === 'index.html')
      if (!html || html.type !== 'asset') return
      let source = String(html.source)
      for (const file of Object.values(bundle)) {
        if (file.type !== 'asset' || !file.fileName.endsWith('.css')) continue
        const tag = new RegExp(`<link rel="stylesheet"[^>]*href="/${file.fileName}"[^>]*>`)
        if (!tag.test(source)) continue
        source = source.replace(tag, () => `<style>${file.source}</style>`)
        delete bundle[file.fileName]
      }
      html.source = source
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    inlineCss(),
    compression({ algorithms: ['gzip'] }),
  ],
  build: {
    // Inline the stylesheet into index.html so the first paint does not wait on a CSS request.
    cssCodeSplit: false,
  },
})
