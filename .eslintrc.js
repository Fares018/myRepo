module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "airbnb",
        "plugin:prettier/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
    ],
    plugins: ["prettier", "react"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
    },
    rules: {
        "no-unused-vars": "warn",
    },
};
