module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', "react"],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    //'prettier/@typescript-eslint',
   // 'plugin:prettier/recommended',
    "plugin:react/recommended"
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars-experimental': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}

