import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteSSG } from 'vite-ssg';

export default defineConfig({
  plugins: [
    react(),
    ViteSSG({
      routes: [
        { path: '/' },
        { path: '/about' },
      ],
    }),
  ],
});
