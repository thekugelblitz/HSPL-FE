import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://hostingspell.com',
  
  compressHTML: true,
  
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: 'lightningcss',
    },
  },
  
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/500') && !page.includes('/503'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],

  build: {
    inlineStylesheets: 'auto',
  },
});