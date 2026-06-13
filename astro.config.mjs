// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with the production domain once deployed.
  site: 'https://kartavya-portfolio.vercel.app',

  integrations: [react(), mdx(), sitemap()],

  adapter: vercel({
    webAnalytics: { enabled: true },
  }),

  vite: {
    plugins: [tailwindcss()],
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
