import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost', // Puedes cambiarlo según tus necesidades
    port: 3000, // Puedes cambiarlo según tus necesidades
  },
})
