// @ts-check
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
  { files: ["**/*.{js,jsx,ts,tsx}"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: { "jsx-a11y": jsxA11y },
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-is-valid": "warn",
      "@typescript-eslint/array-type": ["error", { default: "generic" }],
      "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }]
    }
  },
  { ignores: ["**/node_modules/**", "**/.next/**", "coverage/**", "playwright-report/**", "test-results/**"] }
];
