export default function setFromArray(arr) {
  const ss = new Set();
  for (const i of arr) ss.add(i);
  return ss;
}
