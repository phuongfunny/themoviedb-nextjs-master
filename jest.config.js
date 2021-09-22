const jestConfig = {
  verbose: true,
  testURL: "http://localhost/",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  testMatch: ["<rootDir>/src/**/*.test.js", "<rootDir>/src/**/*.test.jsx"],
};

module.exports = jestConfig;
