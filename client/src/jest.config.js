module.exports = {
  testEnvironment: 'jsdom',  // Use jsdom for testing React components
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],  // Jest setup file
  transform: {
    '^.+\\.jsx?$': 'babel-jest',  // Transform JavaScript and JSX files using babel-jest
  },
  testMatch: [
    '**/?(*.)+(spec|test).[tj]s?(x)',  // Pattern for test files
  ],
};