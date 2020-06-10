// eslint-disable-next-line @typescript-eslint/no-var-requires, import/no-commonjs
const { pathsToModuleNameMapper } = require('ts-jest/utils')
// eslint-disable-next-line @typescript-eslint/no-var-requires, import/no-commonjs
const { compilerOptions } = require('./tsconfig')

// eslint-disable-next-line import/no-commonjs
module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: compilerOptions.baseUrl,
  testRegex: '.spec.ts$',
  collectCoverageFrom: ['src/**/*.{js,jsx,tsx,ts}', '!**/node_modules/**'],
  coverageReporters: ['json', 'lcov'],
  coverageDirectory: '../coverage',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  testURL: 'http://localhost/',
  transformIgnorePatterns: ['/node_modules/'],
  globals: {
    'ts-jest': {
      compiler: 'ttypescript',
    },
  },
}
