import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://amplio.org',
  output: 'server',
  vite: {
    ssr: {
      noExternal: ['@astrojs/tailwind'],
    },
    optimizeDeps: {
      exclude: ['@astrojs/tailwind'],
    },
    build: {
      rollupOptions: {
        external: ['sharp']
      }
    }
  },
  integrations: [
    tailwind({
      config: { path: './tailwind.config.mjs' }
    }),
    alpinejs(),
    react()
  ],
});