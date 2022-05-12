import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  resolve: {
    alias: {
      'stream': 'stream-browserify',
    }
  },
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
