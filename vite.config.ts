import eslint from "@nabla/vite-plugin-eslint";

import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [eslint()],
});
