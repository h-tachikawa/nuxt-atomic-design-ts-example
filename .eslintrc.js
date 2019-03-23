module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: true,
    parser: "typescript-eslint-parser",
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    "no-console": "off",
    "semi": 0,
    "space-before-function-paren": 1,
    "no-unused-vars": 0,
  }
}
