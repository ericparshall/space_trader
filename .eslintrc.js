module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:react/recommended",
    "standard-with-typescript",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  ignorePatterns: ["node_modules/", "app.js", "bin/www.js"],
  overrides: [
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    project: "./tsconfig.json"
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "simple-import-sort"
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/quotes": ["error", "double"],
    "@typescript-eslint/semi": ["error", "always"],
    indent: ["error", 2],
    "max-len": ["error", {
      code: 120
    }],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": [
      "error", {
        // The default grouping, but with type imports first as a separate group.
        groups: [["^.*\\u0000$"], ["^\\u0000"], ["^node:"], ["^@?\\w"], ["^"], ["^\\."]]
      }
    ]
  }
};
