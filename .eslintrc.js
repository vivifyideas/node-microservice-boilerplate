const fs = require("fs");

const prettierOptions = JSON.parse(fs.readFileSync("./.prettierrc", "utf8"));

module.exports = {
  parser: "babel-eslint",
  extends: ["prettier"],
  plugins: ["prettier", "sort-destructure-keys"],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "prettier/prettier": ["error", prettierOptions],
    "arrow-body-style": [2, "as-needed"],
    "class-methods-use-this": 0,
    "comma-dangle": ["error", "never"],
    "import/imports-first": 0,
    "import/newline-after-import": 0,
    "import/no-dynamic-require": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-named-as-default": 0,
    "import/no-webpack-loader-syntax": 0,
    "import/prefer-default-export": 0,
    indent: [
      2,
      2,
      {
        SwitchCase: 1
      }
    ],
    "max-len": 0,
    "newline-per-chained-call": 0,
    "no-confusing-arrow": 0,
    "no-console": 1,
    "no-use-before-define": 0,
    "prefer-template": 2,
    "require-yield": 0,
    "sort-vars": ["error", {}],
    "sort-keys": ["error", "asc", {}],
    "sort-destructure-keys/sort-destructure-keys": 2
  },
  settings: {}
};
