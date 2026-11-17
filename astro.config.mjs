// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

/**
 * Static demo site for a fictional plumber.
 * `site` sets canonical URLs, Open Graph, and the sitemap.
 */
export default defineConfig({
  site: "https://plumber-demo-wb6b.onrender.com",
  output: "static",
  outDir: "dist",
  trailingSlash: "never",
  integrations: [sitemap()],
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
