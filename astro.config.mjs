// @ts-check
import { defineConfig, envField } from 'astro/config';

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
    build: {
      // The Three.js bundle is intentionally large and lazy-loaded only on the
      // home hero (client:only island), so the default 500 kB warning is noise.
      chunkSizeWarningLimit: 1500,
    },
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  // Type-safe environment variables (validated/accessed at runtime on Vercel).
  env: {
    schema: {
      // Optional so the app boots without it; the contact endpoint returns a
      // graceful "not configured" response until the key is set in Vercel.
      RESEND_API_KEY: envField.string({
        context: 'server',
        access: 'secret',
        optional: true,
      }),
      CONTACT_FROM_EMAIL: envField.string({
        context: 'server',
        access: 'secret',
        optional: true,
        default: 'onboarding@resend.dev',
      }),
      CONTACT_TO_EMAIL: envField.string({
        context: 'server',
        access: 'secret',
        optional: true,
        default: 'sonikartavya8@gmail.com',
      }),
    },
  },
});
