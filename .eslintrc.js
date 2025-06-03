module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: [
    'vue',
    'prettier',
  ],
  rules: {
    // Vue specific rules
    'vue/multi-word-component-names': 'off',
    'vue/no-deprecated-slot-attribute': 'off',
    'vue/no-mutating-props': 'warn',
    'vue/no-unused-components': 'warn',
    'vue/valid-template-root': 'warn',

    // General JavaScript rules
    'no-undef': 'warn',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-empty-function': 'warn',

    // Prettier and formatting
    'prettier/prettier': 'error',
    'space-before-function-paren': 'off',
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    // 'space-before-function-paren': ['error', 'never'],
    'arrow-parens': ['error', 'always'],

    // JSDoc (optional)
    'require-jsdoc': ['error', {
      require: {
        FunctionDeclaration: false,
        MethodDefinition: false,
        ClassDeclaration: false,
      },
    }],
  },
};
