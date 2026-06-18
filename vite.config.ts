import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    // The only chunk exceeding 500KB is react-three (Three.js + R3F),
    // which is dynamically imported and only loads on desktop.
    // Mobile users never download it. Safe to raise the limit.
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;

          // Three.js + R3F in a single chunk (tightly coupled, can't split)
          // Only loaded via dynamic import() on desktop
          if (id.includes('node_modules/three') || id.includes('@react-three')) {
            return 'three-webgl';
          }

          // Large vendors get their own chunks for cache efficiency
          if (id.includes('react-dom')) return 'react-dom';
          if (id.includes('react-router')) return 'react-router';
          if (id.includes('gsap')) return 'gsap';
          if (id.includes('lenis')) return 'lenis';

          // Everything else goes into a shared vendor chunk
          return 'vendor';
        },
      },
    },
  },
});