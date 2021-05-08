module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
        project: ['tsconfig.json'],
    },
    plugins: [
        '@typescript-eslint',
        '@typescript-eslint',
        'react',
        'jsx-a11y',
        'react-hooks',
        'prettier',
        'jest',
    ],
    extends: [
        'airbnb-typescript',
        'plugin:jest/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'prettier/prettier': 'error',
        'no-console': 1,
        'no-debugger': 'off',
        'react/no-unused-prop-types': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/triple-slash-reference': 'off',
        'react/jsx-indent': 'off',
        'object-curly-newline': 'off',
        'react/jsx-indent-props': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/no-array-index-key': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        'react/jsx-wrap-multilines': 'off',
        'operator-linebreak': 'off',
        'react/jsx-props-no-spreading': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off',
        'no-case-declarations': 'off',
    },
};
