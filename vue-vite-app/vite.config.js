import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'
import tsconfigPaths from "vite-tsconfig-paths"
import path from "path";
import { createHtmlPlugin } from 'vite-plugin-html';
// https://vitejs.dev/config/
export default defineConfig({
  mode: 'development',
  cache: false,
  target: 'web',
  entry: path.resolve(__dirname, './src/index.ts'),
  output: {
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.vue'],
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
  experiments: {
    topLevelAwait: true,
  },
  server: {
    static: {
      directory: path.join(__dirname),
    },
    compress: true,
    port: 3002,
    strictPort: true,
  },
  plugins: [
    vue(),
    federation({
      name: 'vue-vite-app',
      filename: 'remoteEntry.js',
      exposes: {
        './Sample': './src/bootstrap',
        "./Store": "./src/store/modules/basket"
      },
      shared: ['vue']
    }),
    createHtmlPlugin({
      inject: {
        data: {
        },
      },
    }),
    tsconfigPaths({
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.vue'],
    }),
  ],
})
