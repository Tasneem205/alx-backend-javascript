export default function cleanSet(set, startString) {
  return [...set]
    .filter(value => typeof value === 'string' && value.indexOf(startString) === 0)
    .map(value => value.slice(startString.length))
    .join('-');
}
