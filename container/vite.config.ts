import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001,
  },
  plugins: [
    react(),
    federation({
      name: 'container',
      remotes: {
        vueViteApp: 'vueViteApp@http://localhost:3002/remoteEntry.js'
      }
    })
  ],
})
