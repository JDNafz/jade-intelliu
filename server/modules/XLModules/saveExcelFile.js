const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');


//this is working as expected and reliably creates the xl file in this directory
function saveExcelFile(data, fileName) {
  // Convert the JSON data to an Excel worksheet
  const ws = XLSX.utils.json_to_sheet([data]);
  // Create a new Excel workbook and add the worksheet to it

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet 1');
  // Convert the workbook to a binary buffer

  const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'buffer' });
  // Write the buffer to a file
  const pathString = path.resolve(__dirname, `./${fileName}.xlsx`);
  fs.writeFile(pathString, excelBuffer, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      // console.log(`${fileName}.xlsx has been created successfully.`);
    }
  });

  fs.readFile(pathString, (err, file) => {
    if (err) {
      console.error('Error reading file:', err);
    } else {
      // console.log("made it, I'm returning:", file);
      return file
    }
  });
}

module.exports = saveExcelFile;

