import { resolve } from 'path'; // ✅ 이거 꼭 필요함
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/meetmeet_front_vanilla/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        influencer: resolve(__dirname, 'influencer.html'),
        support: resolve(__dirname, 'support.html'),
        download: resolve(__dirname, 'download.html'),
        exchange: resolve(__dirname, 'exchange.html'),
        login: resolve(__dirname, 'login.html'),
      },
    },
  },
});
