/* eslint-env node */
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 'latest',
    requireConfigFile: false,
  },
  rules: {
    'linebreak-style': 0,
    'no-plusplus': 0,
    'max-len': 0,
  },
};
