import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "app/[name].js",
        chunkFileNames: "app/[name].js",
        assetFileNames: "app/assets/[name].[ext]",
      },
    },
  },

  plugins: [react()],
});
