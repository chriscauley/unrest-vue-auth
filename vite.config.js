import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";


export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: '@unrest/vue-auth'
    },
    rollupOptions: {
      external: ['vue', '@unrest/vue-storage', 'querystring'],
      output: {
        globals: {
          vue: 'Vue',
          '@unrest/vue-storage': 'UnrestVueStorage',
          querystring: 'querystring',
        }
      }
    }
  },
  plugins: [vue()]
})