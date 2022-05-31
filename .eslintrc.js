module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/essential',
    'standard',
    'prettier',
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, semi: false }],
  },
}
