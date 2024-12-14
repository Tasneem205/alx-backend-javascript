/* eslint-disable jest/no-alias-methods */
/* eslint-disable no-new */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/prefer-lowercase-title */
/* eslint-disable jest/require-top-level-describe */
import Building from './5-building';

class TestBuilding extends Building {}

test('Building forces override', () => {
  expect(() => {
    new TestBuilding(200);
  }).toThrowError('Class extending Building must override evacuationWarningMessage');
});
