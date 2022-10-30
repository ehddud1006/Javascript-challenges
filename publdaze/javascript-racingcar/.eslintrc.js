/* eslint-disable no-magic-numbers */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "eslint:recommended", "plugin:prettier/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "max-lines-per-function": ["error", 15],
    "max-depth": ["error", 2],
    "no-console": "warn",
    "import/extensions": ["off"],
    "object-curly-newline": "off",
    "operator-linebreak": "off",
    "arrow-body-style": "off",
    "implicit-arrow-linebreak": "off",
    "function-paren-newline": "off",
    "no-magic-numbers": "warn",
  },
};
