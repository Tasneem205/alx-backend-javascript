let chai;
let assert;
const calculateNumber = require('./2-calcul_chai');

(async () => {
  chai = await import('chai');
  assert = chai.assert;

  describe('calculateNumber', () => {
    describe('SUM', () => {
      it('should return 5 when inputs are 2.4 and 2.6', () => {
        assert.strictEqual(calculateNumber('SUM', 2.4, 2.6), 5);
      });
  
      it('should return 8 when inputs are 4.5 and 3.6', () => {
        assert.strictEqual(calculateNumber('SUM', 4.5, 3.6), 9);
      });
    });
  
    describe('SUBTRACT', () => {
      it('should return 0 when inputs are 3.5 and 3.5', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 3.5, 3.5), 0);
      });
  
      it('should return 2 when inputs are 5.8 and 3.2', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 5.8, 3.2), 3);
      });
    });
  
    describe('DIVIDE', () => {
      it('should return 1.75 when inputs are 3.5 and 2', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 3.5, 2), 2);
      });
  
      it('should return Error when trying to divide by 0', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 3.5, 0), 'Error');
      });
  
      it('should return 2 when inputs are 4 and 2', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 4, 2), 2);
      });
  
      it('should return 1.5 when inputs are 4.5 and 3', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 4.5, 3), 1.67);
      });
    });  
  });
})();
