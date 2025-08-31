import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

const external = ["react", "react-dom", "react/jsx-runtime"];

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/esm/index.js",
      format: "esm",
      sourcemap: true,
      exports: "named"
    },
    {
      file: "dist/cjs/index.js",
      format: "cjs",
      sourcemap: true,
      exports: "named"
    }
  ],
  external: (id) => external.includes(id) || id.startsWith("react/"),
  plugins: [
    resolve({
      extensions: [".js", ".jsx", ".ts", ".tsx"]
    }),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: false,
      exclude: ["**/*.test.*", "**/*.stories.*"]
    })
  ]
};