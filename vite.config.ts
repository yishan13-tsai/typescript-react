import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
const isProd = process.env.NODE_ENV === 'production';
export default defineConfig({
  base: isProd ? '/typescript-react/' : '/',
  plugins: [react()],
})
