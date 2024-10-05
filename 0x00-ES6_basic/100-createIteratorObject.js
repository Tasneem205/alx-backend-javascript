export default function createIteratorObject(report) {
  const res = [];
  for (const department of Object.values(report.allEmployees)) {
    for (const employee of department) {
      res.push(employee);
    }
  }
  return res;
}
