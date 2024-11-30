function calculateNumber(type, a, b) {
  if (type === 'SUM') return Math.round(a) + Math.round(b);
  if (type === 'SUBTRACT') return Math.round(a) - Math.round(b);
  if (Math.round(b) === 0) return 'Error';
  if (type === 'DIVIDE') {
    const result = Math.round(a) / Math.round(b);
    return result % 1 === 0 ? result : Number(result.toFixed(2));
  }
  return 'Invalid type';
}

module.exports = calculateNumber;
