module.exports = {
  root: true,
  env: {
    "browser": true,
    "node": true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 0
  },
  "globals":{
    "document": true,
    "localStorage": true,
    "window": true
  }
}
