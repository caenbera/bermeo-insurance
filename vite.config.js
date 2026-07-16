import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        products: resolve(__dirname, 'products.html'),
        services: resolve(__dirname, 'services.html'),
        aboutUs: resolve(__dirname, 'about-us.html'),
        calculators: resolve(__dirname, 'calculators.html'),
        articles: resolve(__dirname, 'articles.html'),
        videos: resolve(__dirname, 'videos.html'),
        taxResources: resolve(__dirname, 'tax-resources.html'),
        contactUs: resolve(__dirname, 'contact-us.html'),
      },
    },
  },
});
