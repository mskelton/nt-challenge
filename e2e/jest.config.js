module.exports = {
  preset: "jest-playwright-preset",
  testEnvironment: '@testim/root-cause-jest/lib/RootCauseJestEnv',
  reporters: ['@testim/root-cause-jest/lib/reporter/default']
};
