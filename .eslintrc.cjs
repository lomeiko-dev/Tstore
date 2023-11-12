module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "@typescript-eslint/explicit-function-return-type": "off",
        "no-tabs": "off",
        "react/react-in-jsx-scope": "off",
        "react/display-name": "off",
        "no-mixed-spaces-and-tabs": "off",
        "@typescript-eslint/no-dynamic-delete": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "react/prop-types": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/consistent-type-imports": "off",
        "@typescript-eslint/triple-slash-reference": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "array-callback-return": "off",
        "no-trailing-spaces": "off",
        "@typescript-eslint/no-confusing-void-expression": "off",
        "@typescript-eslint/prefer-optional-chain": "off",
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "curly": "off",
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/array-type": "off",
        "object-shorthand": "off",
        "@typescript-eslint/no-invalid-void-type": "off",
        "react/jsx-indent": [2, 4]
    }
}
