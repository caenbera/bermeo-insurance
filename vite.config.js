import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        productos: resolve(__dirname, 'productos.html'),
        servicios: resolve(__dirname, 'servicios.html'),
        aboutUs: resolve(__dirname, 'about-us.html'),
        calculators: resolve(__dirname, 'calculators.html'),
        articles: resolve(__dirname, 'articles.html'),
        videos: resolve(__dirname, 'videos.html'),
        tax: resolve(__dirname, 'tax.html'),
        contactUs: resolve(__dirname, 'contact-us.html'),
      },
    },
  },
});
