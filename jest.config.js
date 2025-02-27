module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)"
  ],

  snapshotFormat: { printBasicPrototype: false },

  transform: {
    '^.+\\.[jt]sx?$': '<rootDir>/node_modules/babel-jest', 
  },

  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{ts,tsx,js,jsx}", 
    "!**/coverage/**",
    "!**/node_modules/**",
    "!**/babel.config.js",
    "!**/jest.setup.js",
    "!**/jest.config.js",
  ],
  modulePathIgnorePatterns: ["./dist/"],
  testPathIgnorePatterns: ['/GraphQL/', '/dist/', '/node_modules/'], 
};
