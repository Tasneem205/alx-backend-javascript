/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/require-top-level-describe */
import Car from './10-car';

test('car has the correct definition', () => {
  const bmw = new Car('BMW', 'Turbo', 'Mango');
  expect(bmw._brand).toBe('BMW');
  expect(bmw._color).toBe('Mango');
  expect(bmw._motor).toBe('Turbo');
  expect(bmw._range).toBeUndefined();
});
