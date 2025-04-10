import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { htmlPrerender } from "vite-plugin-html-prerender";
import { componentTagger } from "lovable-tagger";

// List your routes to pre-render
const routes = ["/", "/about", "/contact"];

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080
  },
  plugins: [
    react(),
    ...(mode === 'development' ? [componentTagger()] : []),
    ...(mode === "production" && !process.env.CI ? [
      htmlPrerender({
        staticDir: path.join(__dirname, "dist"),
        routes,
        minify: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          decodeEntities: true,
          keepClosingSlash: true,
          sortAttributes: true
        }
      })
    ] : [])
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            'react', 
            'react-dom', 
            'react-router-dom',
            '@tanstack/react-query'
          ],
          ui: [
            path.resolve(__dirname, 'src/components/ui')
          ]
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      '@tanstack/react-query'
    ]
  }
}));
