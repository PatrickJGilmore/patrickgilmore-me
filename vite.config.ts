// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerenderSpa from "vite-plugin-prerender-spa"; // NEW plugin

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
    mode === "production" && !process.env.CI &&
      prerenderSpa({
        staticDir: path.join(__dirname, "dist"),
        routes,
        renderAfterDocumentEvent: "seo:ready",
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
