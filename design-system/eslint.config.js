import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';
import jsdoc from 'eslint-plugin-jsdoc';
import stylistic from '@stylistic/eslint-plugin';
import tsdoc from 'eslint-plugin-tsdoc';
import vitest from '@vitest/eslint-plugin';
import globals from 'globals';
import jsxA11y from 'eslint-plugin-jsx-a11y';


export default [
  // Global ignores
  {
    ignores: [
      // Common ignores
      'node_modules/**',
      '*.log',
      'package-lock.json',
      '.DS_Store',
      'CHANGELOG.md',

      // Build artifacts and distribution files
      'build/**',
      'dist/**',
      'coverage/**',
      'storybook-build/**',
      '*.tgz',
      'public/**',

      // Tooling and caches
      '.yalc/**',
      '.cache/**',
      '.parcel-cache/**',
      '.eslintcache',
      'junit.xml',

      // IDEs
      '.vscode/**',
      '.idea/**',
    ],
  },

  // Base config for all TypeScript files
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parser: tsparser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.es2022,
        React: 'readonly',
        JSX: 'readonly',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
        node: true,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react,
      'react-hooks': reactHooks,
      prettier,
      import: importPlugin,
      jsdoc,
      '@stylistic': stylistic,
      tsdoc,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      // ESLint recommended rules
      ...js.configs.recommended.rules,

      // TypeScript ESLint recommended rules
      ...tseslint.configs.recommended.rules,

      // React recommended rules
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // Prettier recommended rules
      ...prettier.configs.recommended.rules,

      // Import recommended rules
      ...importPlugin.configs.recommended.rules,
      ...importPlugin.configs.typescript.rules,

      // JSDoc recommended rules
      ...jsdoc.configs.recommended.rules,

      // jsx-a11y recommended rules
      ...jsxA11y.configs.recommended.rules,
      "jsx-a11y/no-autofocus": "off",

      // eslint
      'no-use-before-define': 'error',
      'prefer-const': 'error',
      'prefer-destructuring': 'warn',
      'object-shorthand': ['error', 'always'],

      // @typescript-eslint
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/member-ordering': ['error'],
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: true,
          fixStyle: 'separate-type-imports',
        },
      ],
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/method-signature-style': ['error', 'method'],

      // react
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/self-closing-comp': [
        'error',
        {
          component: true,
          html: true,
        },
      ],
      'react/jsx-curly-brace-presence': [
        'error',
        {
          props: 'never',
          children: 'ignore',
        },
      ],
      'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
      'react/jsx-first-prop-new-line': ['error', 'multiline'],
      'react/jsx-closing-bracket-location': ['error', 'line-aligned'],

      // prettier
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          jsxBracketSameLine: false,
          printWidth: 100,
          singleAttributePerLine: true,
        },
      ],

      // stylistic
      '@stylistic/padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: ['return', 'function', 'interface', 'export'] },
        { blankLine: 'always', prev: ['return', 'function', 'interface'], next: '*' },
        { blankLine: 'always', prev: '*', next: 'expression' },
        { blankLine: 'any', prev: 'expression', next: 'expression' },
      ],
      '@stylistic/lines-between-class-members': [
        'error',
        'always',
        {
          exceptAfterSingleLine: true,
        },
      ],

      // import
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'react-dom',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'react/**',
              group: 'external',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['react', 'react-dom', 'react/**'],
        },
      ],

      // tsdoc / jsdoc
      'tsdoc/syntax': 'error',
      'jsdoc/require-jsdoc': [
        'error',
        {
          require: {
            FunctionDeclaration: true,
            MethodDefinition: true,
            ClassDeclaration: true,
            ArrowFunctionExpression: false,
            FunctionExpression: false,
          },
          contexts: [
            'ExportDefaultDeclaration > ArrowFunctionExpression',
            'ExportNamedDeclaration > ArrowFunctionExpression',
            'VariableDeclarator > ArrowFunctionExpression',
            'VariableDeclarator > FunctionExpression',
          ],
        },
      ],
      'jsdoc/require-description': [
        'error',
        {
          contexts: [
            'FunctionDeclaration',
            'ArrowFunctionExpression',
            'FunctionExpression',
            'ClassDeclaration',
          ],
        },
      ],
      'jsdoc/require-param': 'off',
      'jsdoc/require-returns': 'off',
      'jsdoc/require-param-type': 'off',
      'jsdoc/require-returns-type': 'off',
      'jsdoc/tag-lines': [
        'error',
        'any',
        {
          startLines: 1,
        },
      ],
      'jsdoc/check-tag-names': 'off',
    },
  },

  // Test files config
  {
    files: [
      '**/*.test.{ts,tsx}',
      '**/tests/**/*',
      '**/__tests__/**/*',
      '**/vitest-setup.ts',
      '**/__mocks__/**/*',
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2022,
        ...globals.node,
        React: 'readonly',
        JSX: 'readonly',
        // Use vitest globals from the plugin
        ...vitest.environments.env.globals,
        // Additional test globals
        jest: 'readonly',
        global: 'readonly',
        process: 'readonly',
      },
    },
    plugins: {
      vitest,
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'jsdoc/require-jsdoc': 'off',
      'jsdoc/require-description': 'off',
      'tsdoc/syntax': 'off',

      // Use recommended vitest rules from the new plugin
      ...vitest.configs.recommended.rules,

      // Disable no-mocks-import because __mocks__ directories are used for test fixtures
      'vitest/no-mocks-import': 'off',
    },
  },

  // Stories files config
  {
    files: ['**/*.stories.{ts,tsx}'],
    plugins: {
      vitest,
    },
    rules: {
      'jsdoc/require-jsdoc': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      // Disable no-mocks-import because __mocks__ directories are used for test fixtures
      'vitest/no-mocks-import': 'off',
    },
  },

  // Config files that need Node.js globals
  {
    files: ['vite.config.ts', 'vitest.config.ts', 'eslint.config.js', 'src/plugins/**'],
    languageOptions: {
      globals: {
        ...globals.node,
        process: 'readonly',
      },
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'jsdoc/require-jsdoc': 'off',
      'jsdoc/require-description': 'off',
      'tsdoc/syntax': 'off',
    },
  },
];
