module.exports = {
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/recommended"
    ],
    plugins: [
        'vue'
    ],
    env: {
        browser: true,
        node: true,
        mocha: true
    },
    globals: {
        expect: true
    }
}