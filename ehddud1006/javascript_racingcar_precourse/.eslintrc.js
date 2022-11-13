module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "eslint:recommended", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    "no-console": "off",
    "no-alert": "off",
    "prettier/prettier": "error",
    "import/extensions": "off",
    "max-depth": ["error", 2],
    "max-lines-per-function": ["error", 15],
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
};
