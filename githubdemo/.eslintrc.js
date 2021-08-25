module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "prettier"],
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js"],
      },
    ],
    "react/prop-types": 0,
    "react/prefer-stateless-function": 0,
    "react/no-array-index-key": 0,
    "no-console": 0,
    "no-unused-vars": 0,
    "func-names": 0,
    "import/no-extraneous-dependencies": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "import/no-unresolved": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-one-expression-per-line": 0,
    camelcase: [0, { properties: "never" }],
    "import/extensions": [
      0,
      "ignorePackages",
      {
        js: "never",
        json: "never",
      },
    ],
  },
};
