import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import tsconfigPaths from "vite-tsconfig-paths"
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  mode: "development",
  entry: "./src/main",
  output: {
    publicPath: 'auto',
  },
  server: {
    static: path.join(__dirname, 'dist'),
    host: 'localhost',
    port: 3001,
    strictPort: true
  },
  plugins: [
    react(),
    federation({
      name: 'container',
      remotes: {
        vueViteApp: 'http://localhost:3002/dist/assets/remoteEntry.js'
      },
      shared: ['react']
    }),
    tsconfigPaths()
  ],
})
