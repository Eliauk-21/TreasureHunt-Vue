import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsInclude: ['**/*.mp3']
  },
  publicDir: 'public',
  base: '/TreasureHunt-Vue/' // 添加这一行，替换为你的仓库名
})