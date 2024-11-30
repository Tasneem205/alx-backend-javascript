let chai;
const calculateNumber = require('./2-calcul_chai');

(async () => {
  chai = await import('chai');
  const expect = chai.expect;

  describe('calculateNumber', () => {
    describe('SUM', () => {
      it('should return 5 when inputs are 2.4 and 2.6', () => {
        expect(calculateNumber('SUM', 2.4, 2.6)).to.equal(5);
      });

      it('should return 8 when inputs are 4.5 and 3.6', () => {
        expect(calculateNumber('SUM', 4.5, 3.6)).to.equal(9);
      });
    });

    describe('SUBTRACT', () => {
      it('should return 0 when inputs are 3.5 and 3.5', () => {
        expect(calculateNumber('SUBTRACT', 3.5, 3.5)).to.equal(0);
      });

      it('should return 2 when inputs are 5.8 and 3.2', () => {
        expect(calculateNumber('SUBTRACT', 5.8, 3.2)).to.equal(3);
      });
    });

    describe('DIVIDE', () => {
      it('should return 1.75 when inputs are 3.5 and 2', () => {
        expect(calculateNumber('DIVIDE', 3.5, 2)).to.equal(2);
      });

      it('should return Error when trying to divide by 0', () => {
        expect(calculateNumber('DIVIDE', 3.5, 0)).to.equal('Error');
      });

      it('should return 2 when inputs are 4 and 2', () => {
        expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
      });

      it('should return 1.5 when inputs are 4.5 and 3', () => {
        expect(calculateNumber('DIVIDE', 4.5, 3)).to.be.closeTo(1.67, 0.01); // Using closeTo for floating point precision
      });
    });
  });
})();
