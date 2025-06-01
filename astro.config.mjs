// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://rahulcodewiz.github.io',
  base: '/mightyloka',
  integrations: [],
  vite: {
    css: {
      devSourcemap: true,
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
  server: {
    port: 3000,
    host: true,
  },
  compressHTML: true,
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: 'github-light'
    }
  }
});
