import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5000
  },
  site: 'https://aat-law.co.il',
  // Base path if the site is served from a sub-directory
  base: '/',
  vite: {
    server: {
      hmr: {
        clientPort: 443,
        host: '0.0.0.0'
      },
      watch: {
        usePolling: true
      },
      cors: true,
      strictPort: true,
      origin: 'https://be4206b3-aeb5-4c6e-a3a8-2066d609b3fe-00-23fpows47i5ew.janeway.replit.dev'
    }
  }
});
