module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module"
  },
  plugins: [
    "vue",
    "prettier"
  ],
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/no-mutating-props": "warn",
    "vue/no-unused-components": "warn",
    "vue/valid-template-root": "warn",
    "no-undef": "warn",
    "prettier/prettier": "error",
    "semi": ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    "space-before-function-paren": ["error", "never"],
    "arrow-parens": ["error", "always"],
    "require-jsdoc": ["error", {
      require: {
        FunctionDeclaration: false,
        MethodDefinition: false,
        ClassDeclaration: false
      }
    }],
    // Miscellaneous tweaks
    'no-console': 'warn', // Warn about console logs (can be adjusted to 'off' or 'error' if needed)
    'no-debugger': 'warn', // Warn about debugger statements
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Warn on unused variables but allow unused function arguments with an underscore
    'no-empty-function': 'warn', // Warn about empty functions
  }
};
