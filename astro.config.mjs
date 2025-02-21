import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://amplio.org',
  output: 'server',
  integrations: [
    tailwind({
      config: { 
        content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}']
      }
    }),
    alpinejs(),
    react()
  ],
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'critical': ['/src/components/BannerSection.astro']
          }
        }
      }
    }
  }
});