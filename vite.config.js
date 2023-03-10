import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
  root: "./src",
  base: "/music-player/",
  plugins: [mkcert()],
  server: {
    https: true,
  },
  test: {
    dir: "./tests",
    testTimeout: 60_000,
    hookTimeout: 60_000,
  },
  build: {
    outDir: "../docs",
  },
});
