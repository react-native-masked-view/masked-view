module.exports = {
  parser: 'babel-eslint',
  plugins: ['flowtype', 'prettier', 'react', 'react-native'],
  extends: [
    'plugin:flowtype/recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/all',
    'plugin:react-native/all',
    'prettier/react'
  ],
  globals: {
    module: true,
    __DEV__: true,
    console: true
  },
  rules: {
    'react/require-optimization': 0,
    'react/jsx-filename-extension': 0,
    'react/forbid-component-props': 0,
    'react/jsx-props-no-spreading': 0
  },
  settings: {
    react: {
      version: '16.8.6'
    }
  }
};
