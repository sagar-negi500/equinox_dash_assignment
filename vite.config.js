import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/equinox_dash_assignment/',
   plugins: [react(),
    tailwindcss()
  ],
})
