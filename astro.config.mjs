// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://bertolotti.dev",
  // Emit /calendly-success.html and /404.html, keeping the old URLs stable.
  build: { format: "file" },
  vite: { plugins: [tailwindcss()] },
});
