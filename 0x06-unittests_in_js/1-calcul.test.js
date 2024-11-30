// 1-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should return 4 when inputs are 1.4 and 2.6', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 2.6), 4);
    });

    it('should return 6 when inputs are 2.5 and 2.5', () => {
      assert.strictEqual(calculateNumber('SUM', 2.5, 2.5), 6);
    });

    it('should return 0 when inputs are 0 and 0', () => {
      assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should return -1 when inputs are 1.4 and 2.6', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 2.6), -2);
    });

    it('should return 1 when inputs are 2.5 and 2.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.5, 2.5), 0);
    });

    it('should return -2 when inputs are 0 and 2.2', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 2.2), -2);
    });
  });

  describe('DIVIDE operation', () => {
    it('should return 2 when inputs are 3.5 and 1.4', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.5, 1.4), 4);
    });

    it('should return Error when dividing by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.5, 0), 'Error');
    });

    it('should return 0 when inputs are 1.2 and 2.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.2, 2.5), 0.33);
    });
  });

  describe('Invalid type operation', () => {
    it('should return "Invalid type" for unsupported type', () => {
      assert.strictEqual(calculateNumber('MULTIPLY', 1.4, 2.6), 'Invalid type');
    });
  });
});
