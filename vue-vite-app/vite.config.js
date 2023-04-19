import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'
import tsconfigPaths from "vite-tsconfig-paths"

//import { createHtmlPlugin } from 'vite-plugin-html';
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3002,
  },
  plugins: [
    vue(),
    federation({
      name: 'vueViteApp',
      filename: 'remoteEntry.js',
      exposes: {
        './Sample': './src/bootstrap.ts',
      },
      shared: ['vue']
    }),
    tsconfigPaths({
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.vue'],
    }),
  ],
})
