import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import DefineOptions from 'unplugin-vue-define-options/rollup'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),vueJsx(), DefineOptions()]
})
