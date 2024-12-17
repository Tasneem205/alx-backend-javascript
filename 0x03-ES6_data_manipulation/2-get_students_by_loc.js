export default function getStudentsByLocation(arr, location) {
  return arr.filter((std) => std.location === location);
}
