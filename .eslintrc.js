module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
        'jest/globals': true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:jest/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['react', 'react-hooks', 'jest'],
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        'jest/no-export': 0,
        'no-console': ['error', { allow: ['error', 'warn', 'info'] }],
        'no-multiple-empty-lines': ['warn', { max: 1 }],
        'no-nonoctal-decimal-escape': 'off',
        'no-undef': 2,
        quotes: [2, 'single', { avoidEscape: false }],
        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react/prop-types': 0,
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
