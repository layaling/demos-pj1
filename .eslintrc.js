module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': 'off',
    'no-trailing-spaces': 'off',
    'object-shorthand': 'off',
    'max-len':'off',
    'linebreak-style': [0, 'error', 'windows'],
    'import/extensions': 0,
    "semi": 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  }
}
