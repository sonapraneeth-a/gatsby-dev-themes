module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: ["google", "plugin:react/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks"],
  rules: {
    indent: ["error", 2],
    semi: [2, "always"],
    "linebreak-style": ["error", "unix"],
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
    "no-unused-vars": "error",
    quotes: [2, "double", { avoidEscape: true }],
    "react/display-name": "off",
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
  },
}
