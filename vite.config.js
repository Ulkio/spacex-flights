import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import {fileURLToPath, URL} from "url"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@c": fileURLToPath(new URL("./src/components", import.meta.url)),
      "@p": fileURLToPath(new URL("./src/pages", import.meta.url)),
    },
  },
});
