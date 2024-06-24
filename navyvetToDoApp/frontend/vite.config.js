import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.',
  base: './',
  publicDir: 'public',
  build: {
    outDir: '../build',
    assetsDir: 'static',
    // assetsInclude: ['**/*.png', '**/*.jpg', '**/*.svg', '**/*.gif'],
    emptyOutDir: true,
  }
})
