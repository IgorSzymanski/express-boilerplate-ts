// eslint-disable-next-line @typescript-eslint/no-var-requires, import/no-commonjs
const jestConfig = require('./jest.config')

// eslint-disable-next-line import/no-commonjs
module.exports = {
  ...jestConfig,
  testRegex: '/e2e/.*\\.(e2e-test|e2e-spec).(ts|tsx|js)$',
}
