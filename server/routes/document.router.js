const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const encryptLib = require("../modules/encryption");
const pool = require("../modules/pool");


const dummyResults= [
  {
    doc_compare_id: "1_1",
    high_level_spec_id: "iso_80131_195",
    low_level_spec_id: "SRS3513",
    //epoch time in seconds (unix)
    analysis_timestamp: 1699286271,
    analysis_result: "yes",
    analysis_score: 3.51,
    result_reason: "result reason N/A",
    result_feedback: "user feedback for IntelliU",
  },
  {
    doc_compare_id: "2_1",
    high_level_spec_id: "iso_280131_195",
    low_level_spec_id: "SRS3513",
    //epoch time in seconds (unix)
    analysis_timestamp: 1699286271,
    analysis_result: "yes",
    analysis_score: 6.51,
    result_reason: "result reason N/A",
    result_feedback: "user feedback for IntelliU",
  },
  {
    doc_compare_id: "3_1",
    high_level_spec_id: "iso_380131_195",
    low_level_spec_id: "SRS3513",
    //epoch time in seconds (unix)
    analysis_timestamp: 1699286271,
    analysis_result: "yes",
    analysis_score: 9.51,
    result_reason: "result reason N/A",
    result_feedback: "user feedback for IntelliU",
  },
]

const router = express.Router();
// ADMIN: Endpoint to allow only admin to upload a high spec document
router.post("/upload-highspec", rejectUnauthenticated, (req, res, next) => {
  if (req.user.role !== "intelliu") {
    return res
      .status(403)
      .json({ success: false, message: "You are not authorized" });
  }
  const queryText = `INSERT INTO "regulatory_standard" (device_name, admin_id, document_link)
    VALUES ($1, $2, $3) RETURNING id`;
  // TODO: Do we need to send the high spec document to intelliu API?
  pool
    .query(queryText, [req.body.device_name, req.user.id, "document_link"])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log("User registration failed: ", err);
      res.sendStatus(500);
    });
});
// USER: Upload low_spec_document to be sent for analysis. 
router.post("/upload-lowspec", rejectUnauthenticated, (req, res, next) => {
  const queryText = `INSERT INTO "user_document" (document_name, standard_id, user_id, document_link)
      VALUES ($1, $2, $3, $4) RETURNING id`;
  // TODO: Check intelliu API documentation, how to submit low spec for analysis?
  pool
    .query(queryText, [
      req.body.document_name,
      req.body.standard_id,
      req.user.id,
      //   req.body.JSON,
      "document_link",
    ])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log("User registration failed: ", err);
      res.sendStatus(500);
    });
});
// ADMIN: Get all high_spec_documents.
router.get("/", rejectUnauthenticated, (req, res) => {
  if (req.user.role !== "intelliu") {
    return res
      .status(403)
      .json({ success: false, message: "You are not authorized" });
  }
  const query = `SELECT * 
    FROM "regulatory_standard"`;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get all truck details failed", err);
      res.sendStatus(500);
    });
});

// USER: Get one users results. 
router.get("/get-my-documents", rejectUnauthenticated, (req, res) => {
  const query = `SELECT *
    FROM "user_document" WHERE "user_id" =$1`;
    //TODO: make API call to IntelliU API to get a users results. 
  pool
    .query(query, [req.user.id])
    .then((result) => {
      res.send(dummyResults);
    })
    .catch((err) => {
      console.log("ERROR: Get all truck details failed", err);
      res.sendStatus(500);
    });
});

module.exports = router;
