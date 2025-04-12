
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { htmlPrerender } from "vite-plugin-html-prerender";
import { componentTagger } from "lovable-tagger";

// List your routes to pre-render - expand to include all major routes
const routes = ["/", "/about", "/contact", "/404", "/403"];

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080
  },
  plugins: [
    react(),
    // Add componentTagger in development mode
    mode === 'development' && componentTagger(),
    // Only use htmlPrerender in production and when not in a CI environment like Netlify
    mode === "production" && !process.env.CI &&
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
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  build: {
    // Ensure proper output directory
    outDir: 'dist',
    emptyOutDir: true,
    // Force minification for all files
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug']
      },
      format: {
        comments: false
      }
    },
    // Chunk optimizations
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
  },
  // Ensure content is visible to crawlers
  ssr: {
    noExternal: ['react-helmet']
  }
}));
