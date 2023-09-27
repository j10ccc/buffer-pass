import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import nodePolyfills from "rollup-plugin-polyfill-node";

export default {
  input: "src/main.ts",
  output: {
    file: "dist/main.js",
    format: "iife"
  },
  plugins: [
    nodePolyfills(),
    typescript(),
    resolve({
      browser: true,
    })
  ]
};