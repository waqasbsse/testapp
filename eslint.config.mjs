// eslint.config.mjs
import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";

export default [
  // Include the recommended config directly in the array
  js.configs.recommended,
  
  // React config
  pluginReact.configs.flat.recommended,
  
  // Your custom configuration
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
        // Add any other globals you need
      }
    },
    rules: {
      // Add your custom rules here
      // "rule-name": "error" | "warn" | "off"
    }
  }
];