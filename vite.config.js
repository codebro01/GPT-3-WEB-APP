import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.',          // Set root to the current directory (default behavior)
  build: {
    rollupOptions: {
      input: './index.html',  // Explicitly specify the entry point
    },
  },
})
