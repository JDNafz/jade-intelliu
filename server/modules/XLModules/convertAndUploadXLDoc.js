const saveExcelFile = require("./saveExcelFile");
const updateSqlDownloadFile = require("./updateSqlDownloadFile");
const uploadXLDoc = require("./cloudinaryUpload");
const path = require('path');
const removeTempDoc = require("./removeTempDoc");


// This file is the central function designed to create an xl file, send it to cloudinary and delete the temporary xl file.
async function convertAndUploadXLDoc(user_document_object){
  //write file
  const data = user_document_object.JSON
  // console.log("data to convert:", data);
  const fileName = `${user_document_object.document_name},${user_document_object.id}`;
  const output = await saveExcelFile(data, fileName);

  const filePath =  await path.resolve(__dirname, `./${fileName}.xlsx`)
  // console.log("file after saving xl:", output); 



  //upload file to Cloudinary
  // const cloudinaryLink = await uploadXLDoc(file)
  // console.log("Results back from cloudinary:", cloudinaryLink);



  //update "download_file" col to the cloudinary url
  // updateSqlDownloadFile(cloudinaryLink);



  // delete file stored in dir
  await removeTempDoc(filePath);
  
}

module.exports = convertAndUploadXLDoc;