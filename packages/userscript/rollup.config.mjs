import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import nodePolyfills from "rollup-plugin-polyfill-node";
import { userScriptPlugin } from "rollup-plugin-userscript-metaheader";

import fs from "fs";
import pkg from "./package.json" assert { type: "json" };

export default {
  input: "src/main.ts",
  output: {
    file: "dist/bundle.js",
    format: "iife",
    banner: () => ("\n/*\n" + fs.readFileSync("../../LICENSE", "utf8") + "\n*/\n"),
  },
  plugins: [
    nodePolyfills(),
    typescript(),
    resolve({
      browser: true,
    }),
    userScriptPlugin({
      headers: {
        name: pkg.name,
        description: pkg.description,
        version: pkg.version,
        author: pkg.author,
        license: pkg.license
      }
    })
  ]
};