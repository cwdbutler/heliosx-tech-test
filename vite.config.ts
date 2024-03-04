import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import postcssCustomMedia from "postcss-custom-media";
import postcssGlobalData from "@csstools/postcss-global-data";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        postcssGlobalData({
          files: ["src/styles/breakpoints.css"],
        }),
        postcssCustomMedia(/* pluginOptions */),
      ],
    },
  },
});
