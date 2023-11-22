const fs = require("fs");


//this file is working, and removes the file. There is some sort of async bug that sometimes throws the error though
function removeTempDoc(path) {
  //wait before deleting to make sure path is there.
  new Promise((resolve) => setTimeout(resolve, 4000));

  fs.unlink(path, (err) => {
    if (err) {
      console.error("Deletion Error:", err);
      return;
    }
    console.log("File deleted successfully");
  });
}

module.exports = removeTempDoc;
