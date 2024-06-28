module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Consolidated setupFilesAfterEnv
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // Adjust based on your needs, 'jsdom' for DOM-related tests
  globals: {
    'ts-jest': {
      tsconfig: {
        // Specify your TypeScript compiler options here
        "compilerOptions": {
          "jsx": "react-jsx"
        }
      }
    }
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx']
};