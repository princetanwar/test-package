import type { RollupOptions } from "rollup";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import esbuild from "rollup-plugin-esbuild";
// import dts from "rollup-plugin-dts";

const config: RollupOptions[] = [
  {
    input: "src/index.ts",
    output: [
      {
        dir: "dist",
        format: "cjs",
      },
      { dir: "dist/esm", format: "esm" },
    ],
    plugins: [
      esbuild({
        // minify: process.env.NODE_ENV === "production",
        target: "esnext", // Or specify a version like 'es2015'
        tsconfig: "tsconfig.json", // Use your existing tsconfig.json
      }),
      nodeResolve(),
      commonjs(),
    ],
    external: ["lodash"], // don't include these in build bundle
  },
  // {
  //   input: "dist/types/index.d.ts",
  //   output: [{ file: "dist/index.d.ts", format: "es" }],
  //   plugins: [dts()],
  // },
];

export default config;
