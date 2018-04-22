module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended"],
  plugins: ["react"],
  env: {
    browser: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: ""
  },
  parser: "babel-eslint"
};
