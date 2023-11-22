const express = require("express");
const axios = require("axios");


//this should send the document to Cloudinary and return a link to the document
function uploadXLDoc(doc) {
  try {
    const data = new FormData();
    data.append("file", doc);
    data.append("upload_preset", "intelliU");
    const res = axios.post(
      `https://api.cloudinary.com/v1_1/dae8japsd/upload`,
      data
    );
    console.log("cloud res:", res.data)
    const document_link = res.data.secure_url;
    console.log("Got link back from Cloudinary from xl file:", document_link);
    return document_link;
  } catch (error) {
    console.log("Error uploading XL Doc", doc.name, "error:", error);
  }
}

module.exports = uploadXLDoc;