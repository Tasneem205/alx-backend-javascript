const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 when inputs are 1.4 and 2.6', () => {
    assert.strictEqual(calculateNumber(1.4, 2.6), 4);
  });

  it('should return 5 when inputs are 2.5 and 2.5', () => {
    assert.strictEqual(calculateNumber(2.5, 2.5), 6);
  });

  it('should return 3 when inputs are 1.2 and 2.2', () => {
    assert.strictEqual(calculateNumber(1.2, 2.2), 3);
  });

  it('should return 0 when inputs are 0 and 0', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should handle negative numbers properly', () => {
    assert.strictEqual(calculateNumber(-1.4, -2.6), -4);
  });

  it('should return correct value when one input is zero', () => {
    assert.strictEqual(calculateNumber(0, 4.5), 5);
  });

  it('should round correctly for large numbers', () => {
    assert.strictEqual(calculateNumber(1234.7, 4321.2), 5556);
  });
});
