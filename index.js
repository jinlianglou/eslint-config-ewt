module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es2021": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 13,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
    },
  },
  "plugins": [
    "@typescript-eslint",
    "react",
  ],
  "rules": {
    "no-console": "warn",
  },
};
