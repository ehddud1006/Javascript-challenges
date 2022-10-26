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
    'max-depth': ['error', 2],
    'no-console': 'warn',
    'import/extensions': ['off'],
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
    'arrow-body-style': 'off',
  },
};
