
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { htmlPrerender } from "vite-plugin-html-prerender";
import { componentTagger } from "lovable-tagger";

// List your routes to pre-render - include all routes your site has
const routes = [
  "/", 
  "/404", 
  "/403"
];

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    // Always use htmlPrerender in production builds, even on Netlify
    mode === "production" &&
      htmlPrerender({
        staticDir: path.join(__dirname, "dist"),
        routes,
        minify: {
          collapseBooleanAttributes: true,
          collapseWhitespace: false, // Don't collapse whitespace to preserve readability for SEO
          decodeEntities: true,
          keepClosingSlash: true,
          sortAttributes: true
        }
        // Removed unsupported options: renderAfterDocumentEvent and renderAfterTime
      })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  build: {
    // Avoid directory loading issues
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
            '@/components/ui',
          ]
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false, // Keep console logs for debugging
      },
      format: {
        comments: false, // Remove comments from production builds
      },
    },
    // Important: Enable SSR functionality
    ssrManifest: true,
  },
}));
