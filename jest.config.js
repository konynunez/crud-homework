const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: 'C:\\Users\\Konyn\\Desktop\\projects\\crud-homework',
});

const config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/jest.setup.js'],
};

module.exports = createJestConfig(config);
