import createEmployeesObject from './11-createEmployeesObject';
import createReportObject from './12-createReportObject';

const employees = {
  ...createEmployeesObject('engineering', ['Bob', 'Jane']),
  ...createEmployeesObject('marketing', ['Sylvie']),
};

const report = createReportObject(employees);
// eslint-disable-next-line jest/require-hook
console.log(report.allEmployees);
// eslint-disable-next-line jest/require-hook
console.log(report.getNumberOfDepartments(report.allEmployees));
