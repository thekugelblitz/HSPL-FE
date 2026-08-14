import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://hostingspell.com',
  adapter: node({
    mode: 'standalone',
  }),
  
  compressHTML: true,
  
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  
  vite: {
    plugins: [tailwindcss()],
    build: {
      target: 'es2022',
      cssMinify: 'lightningcss',
      cssCodeSplit: true,
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('node_modules/lucide-react')) {
              return 'lucide-vendor';
            }
          },
        },
      },
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