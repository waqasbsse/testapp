// eslint.config.mjs
import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: {
      js: js
    },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // Add node globals if needed
        ...globals.jest  // Add jest globals if needed
      }
    }
  },
  pluginReact.configs.flat.recommended
];