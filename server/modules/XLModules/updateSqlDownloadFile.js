const pool = require("../pool");


//this has not been tested as the central function is failing to upload to cloudinary
function updateSqlDownloadFile(json, user_id, document_id) {
  const query = `UPDATE "user_document"
  SET "download_file" = $1
  WHERE user_id = $2
  AND user_document.id=$3;
`;
  pool
    .query(query, [json, user_id, document_id])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("ERROR Updating XL file failed:", err);
      res.sendStatus(500);
    });
}

module.exports = updateSqlDownloadFile;
