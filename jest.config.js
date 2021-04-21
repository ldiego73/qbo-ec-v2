module.exports = {
  moduleNameMapper: {
    ".+\\.(css|sass|scss|less|styl)$": "identity-obj-proxy",
    "^@contexts(.*)$": "src/contexts$1",
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@core(.*)$": "<rootDir>/src/core$1",
    "^@hooks(.*)$": "<rootDir>/src/hooks$1",
    "^@layouts(.*)$": "<rootDir>/src/layouts$1",
    "^@screes(.*)$": "<rootDir>/src/screens$1",
    "^@utils(.*)$": "<rootDir>/src/utils$1",

    "^@home(.*)$": "<rootDir>/src/screens/home$1",
    "^@cart(.*)$": "<rootDir>/src/screens/cart$1",
    "^@checkout(.*)$": "<rootDir>/src/screens/checkout$1",
    "^@notFound(.*)$": "<rootDir>/src/screens/not-found$1",
    "^@oauth(.*)$": "<rootDir>/src/screens/oauth$1",
    "^@store(.*)$": "<rootDir>/src/screens/store$1",
  },
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "reports/test",
        filename: "index.html",
        pageTitle: "QBO - Unit Test",
      },
    ],
  ],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.js", "src/**/*.jsx", "!**/node_modules/**"],
  coverageReporters: ["json", "text", "lcov", "html"],
  coverageDirectory: "reports/coverage",
  testURL: "http://localhost",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
