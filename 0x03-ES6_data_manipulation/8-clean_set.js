export default function cleanSet(set, startString) {
  if (typeof startString !== 'string') return '';
  return [...set]
    .filter((value) => typeof value === 'string' && value.indexOf(startString) === 0)
    .map((value) => value.slice(startString.length))
    .join('-');
}
