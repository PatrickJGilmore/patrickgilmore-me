import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { htmlPrerender } from "vite-plugin-html-prerender";

// List your routes to pre-render; update these paths as needed.
const routes = ["/", "/about", "/contact"];

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" &&
      htmlPrerender({
        staticDir: path.join(__dirname, "dist"),
        routes,
        // Limit parallelism to reduce load on the build container:
        parallel: 1,
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
  }
}));
