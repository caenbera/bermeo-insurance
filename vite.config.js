import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve('index.html'),
        products: resolve('products.html'),
        services: resolve('services.html'),
        aboutUs: resolve('about-us.html'),
        calculators: resolve('calculators.html'),
        articles: resolve('articles.html'),
        videos: resolve('videos.html'),
        taxResources: resolve('tax-resources.html'),
        contactUs: resolve('contact-us.html'),
      },
    },
  },
});
