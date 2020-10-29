module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
        'jest/globals': true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jest/recommended'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 11,
        sourceType: 'module'
    },
    plugins: [
        'react',
        'react-hooks',
        'jest'
    ],
    rules: {
        'indent': ['error', 4, { "SwitchCase": 1 }],
        'no-console': ['error', {'allow':['error', 'warn', 'info']}],
        'no-multiple-empty-lines': ['warn', {'max': 1}],
        'no-undef': 2,
        'quotes': ['error', 'single'],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/prop-types': 0,
        'jest/no-export': 0
    }
}
