// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

/**
 * Static demo site for a fictional plumber.
 * `site` is a placeholder origin for canonical URLs and the sitemap.
 * Replace it when the concept is hosted on a real domain.
 */
export default defineConfig({
  site: "https://plumber-demo.example",
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
