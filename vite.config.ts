// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { htmlPrerender } from "vite-plugin-html-prerender";
import { componentTagger } from "lovable-tagger";

// List all routes defined in your App.tsx:
// Your router defines:
//   "/" -> Index
//   "/404" -> NotFound
//   "/403" -> Forbidden
//   Redirects: "/index.html", "/home", "/about-me", "/skills", "/experience", "/awards", "/activities", "/testimonials", "/contact"
// (The wildcard "*" is handled by NotFound)
// Even though many are redirects, including them here ensures that if these URLs are requested,
// they will produce prerendered HTML (typically with a client-side redirect) that search engines can follow.
const routes = [
  "/",
  "/404",
  "/403",
  "/index.html",
  "/home",
  "/about-me",
  "/skills",
  "/experience",
  "/awards",
  "/activities",
  "/testimonials",
  "/contact",
];

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // Only use htmlPrerender in production and when not in a CI environment such as Netlify
    mode === "production" && !process.env.CI &&
      htmlPrerender({
        staticDir: path.join(__dirname, "dist"),
        routes,
        minify: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          decodeEntities: true,
          keepClosingSlash: true,
          sortAttributes: true,
        },
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            "react",
            "react-dom",
            "react-router-dom",
            "@tanstack/react-query",
          ],
          ui: ["@/components/ui"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
}));
