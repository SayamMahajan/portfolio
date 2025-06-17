import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "lottie-chunk": ["lottie-react"],
          "emailjs-chunk": ["emailjs-com"],
        },
      },
    },
  },
});

