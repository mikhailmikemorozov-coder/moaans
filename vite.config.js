import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, mkdirSync } from 'fs'

const routes = [
  'pokraska-diskov-moskva',
  'almaznaya-prochka-diskov',
  'remont-diskov-moskva',
  'pokraska-supportov-moskva',
  'tseny',
  'blog',
  'blog/almaznaya-prochka-diskov-chto-eto',
  'blog/pokraska-diskov-v-chernyy',
  'blog/remont-litogo-diska-tsena',
]

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'generate-spa-routes',
      closeBundle() {
        // 404.html fallback for Cloudflare Pages
        copyFileSync('dist/index.html', 'dist/404.html')

        // Real HTML file for each route — crawlers get 200, no server logic needed
        for (const route of routes) {
          mkdirSync(`dist/${route}`, { recursive: true })
          copyFileSync('dist/index.html', `dist/${route}/index.html`)
        }
      },
    },
  ],
  base: process.env.VITE_BASE_PATH ?? '/',
})
