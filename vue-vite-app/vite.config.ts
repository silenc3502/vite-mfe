import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/my-visit-card/',
  server: {
    port: 3002,
  },
  plugins: [
    vue(),
    federation({
      name: 'vueViteApp',
      filename: 'remoteEntry.js',
      exposes: {
        './Sample': './src/bootstrap',
        "./Store": "./src/store/modules/basket"
      },
      shared: ['vue()']
    })
  ],
})
