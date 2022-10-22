module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'eslint:recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'max-lines-per-function': ['error', 15],
    'no-console': 'warn',
    'import/extensions': ['off'],
    'max-depth': ['error', 2],
    'object-curly-newline': 'off',
  },
};
