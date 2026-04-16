import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  base: "/my-portfolio/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/attached_assets"),
    },
  },
  build: {
    outDir: "dist",
  },
});
