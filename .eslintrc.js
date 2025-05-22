module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "prettier"
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  plugins: [
    "vue",
    "prettier"
  ],
  rules: {
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
    }]
  }
};
