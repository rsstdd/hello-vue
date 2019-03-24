module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'import/no-unresolved': 'off',
    'react/prop-types': 'off',
    'react/jsx-pascal-case': 'off',
    'import/order': 'off',
    'babel/camelcase': 'off',
    'jsx-a11y/label-has-for': 'off',
    'max-lines-per-function': 'off',
    'babel/quotes': 'off',
  },
};
