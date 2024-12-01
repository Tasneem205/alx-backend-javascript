const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file content synchronously
    const data = fs.readFileSync(path, 'utf-8');

    // Split the file content into rows and remove the header
    const rows = data.split('\n').filter((row) => row.trim() !== '');
    const header = rows.shift(); // Remove the header line

    if (!header || rows.length === 0) {
      console.log('No students found in the database.');
      return;
    }
    const studentsByField = {};
    let totalStudents = 0;
    rows.forEach((row) => {
      const fields = row.split(',');
      if (fields.length >= 2) {
        const firstname = fields[0].trim();
        const field = fields[3].trim();
        // Ensure the field exists in the object
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstname);
        totalStudents += 1;
      }
    });

    console.log(`Number of students: ${totalStudents}`);

    for (const [field, students] of Object.entries(studentsByField)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
