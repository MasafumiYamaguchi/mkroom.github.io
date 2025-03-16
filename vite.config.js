import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { resolve } from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    solidPlugin(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: "src/assets",
          dest: "assets",
        },
      ],
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
