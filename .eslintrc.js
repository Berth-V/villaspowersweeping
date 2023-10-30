module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'standard',
    'eslint-config-prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'no-unused-vars': 'warn',
    'react/prop-types': 0,
    'react/jsx-key': 0,
    'react/display-name': 0,
  },
};
