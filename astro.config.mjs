// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'http://mightyloka.com',
  base: '/',
  integrations: [],
  vite: {
    css: {
      devSourcemap: true,
    },
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            if (!assetInfo.name) return 'assets/[name][extname]';
            const info = assetInfo.name.split('.');
            const ext = info[info.length - 1];
            return `assets/[name][extname]`;
          }
        }
      }
    }
  },
  build: {
    inlineStylesheets: 'auto',
    assets: '_assets'
  },
  server: {
    port: 3000,
    host: true,
  },
  compressHTML: true,
  markdown: {
    shikiConfig: {
      theme: 'github-light'
    }
  }
});
