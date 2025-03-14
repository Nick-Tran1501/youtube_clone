module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "@typescript-eslint", "react"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  // rules: {
  //   "no-console": "warn",
  //   "no-eval": "error",
  //   "react/react-in-jsx-scope": "off",
  //   "react/jsx-filename-extension": [
  //     2,
  //     {
  //       extensions: [".js", ".jsx", ".ts", ".tsx"],
  //     },
  //   ],
  //   "import/extensions": [
  //     "error",
  //     "ignorePackages",
  //     {
  //       js: "never",
  //       jsx: "never",
  //       ts: "never",
  //       tsx: "never",
  //     },
  //   ],
  // },
};
