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
    },
};
