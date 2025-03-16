import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { resolve } from "path";
import { copy } from "vite-plugin-copy";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    solidPlugin(),
    tailwindcss(),
    copy({
      targets: [{ src: "src/assets/**/*", dest: "dist/assets" }],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
