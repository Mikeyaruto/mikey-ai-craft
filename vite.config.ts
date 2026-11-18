import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// GitHub Pages serves project sites from /<repo-name>/, so the base path
// must match the repository name exactly (mikey-ai-craft).
export default defineConfig({
  base: process.env.VERCEL ? "/" : "/mikey-ai-craft/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
