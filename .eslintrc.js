module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    jsx: true,           // ← enable JSX parsing
    project: './tsconfig.json'
  },
  plugins: ['react', '@typescript-eslint'],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      node: { extensions: ['.js','.jsx','.ts','.tsx'] }
    }
  }
};
