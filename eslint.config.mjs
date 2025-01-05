import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    rules: {
      "quotes": ["error", "double"], // Wymusza podwójne cudzysłowy w stringach
      "semi": ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],
      "indent": ["error", 2],
      "no-trailing-spaces": "error",
      "eqeqeq": ["error", "always"],
      "arrow-spacing": ["error", { "before": true, "after": true }],

    },
  },
  {
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
