import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <--- Импорт

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss() // <--- Добавление плагина
  ],
})
