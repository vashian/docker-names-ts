export default {
  testEnvironment: 'node',
  preset: 'ts-jest',

  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.(m)?js$': '$1',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(m)?ts$',
};
