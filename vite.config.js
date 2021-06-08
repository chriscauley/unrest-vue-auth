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
      external: ['vue', '@unrest/css', '@unrest/vue-reactive-storage'],
      output: {
        globals: {
          vue: 'Vue',
          '@unrest/css': 'UnrestCss',
          '@unrest/vue-reactive-storage': 'UnrestVueReactiveStorage',
        }
      }
    }
  },
  plugins: [vue()]
})