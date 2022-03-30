import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig(({command}) => {

  return {
    plugins: [vue()],
    base: command === 'build' ? '/template-app/' : '/',
    build: {
      outDir: 'docs'
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src")
      },
    }
  }
})
