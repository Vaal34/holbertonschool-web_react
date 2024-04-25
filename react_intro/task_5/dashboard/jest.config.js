module.exports = {
    setupFilesAfterEnv: ['<rootDir>/config/setupTests.js'],
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
      "\\.(gif|ttf|eot|svg|png|jpg)$": "<rootDir>/__mocks__/fileMock.js"
  }
  };