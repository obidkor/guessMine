module.exports = {
  //config
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  // 직접 vscode extension 깔아야댐(eslint,prettier)
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },

  //무시할 에러들
  rules: {
    // console log omit
    "no-console": "off",

    // 줄바꿈 에러
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
