import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteSSG } from 'vite-ssg';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteSSG({
      // Define routes to prerender
      routes: [
        { path: '/' },
        { path: '/about' },
      ],
    }),
  ],
});
