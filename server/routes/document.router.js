const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const encryptLib = require("../modules/encryption");
const pool = require("../modules/pool");

const dummyResult1 = require("../modules/DummyData/dummydata1");
const dummyResult2 = require("../modules/DummyData/dummydata2");
const dummyResult3 = require("../modules/DummyData/dummydata3");

let documentNames = ["60601-1.doc", "60601-2.doc", "60601-3.doc"];

const router = express.Router();
// ADMIN: Endpoint to allow only admin to upload a high spec document
router.post("/highspec", rejectUnauthenticated, (req, res, next) => {
  if (req.user.role !== "intelliu") {
    return res
      .status(403)
      .json({ success: false, message: "You are not authorized" });
  }
  // console.log("RECK DOT BODY", req.body);
  const queryText = `INSERT INTO "regulatory_standard" (device_name, admin_id, document_link)
    VALUES ($1, $2, $3) RETURNING id`;
  // TODO: Do we need to send the high spec document to intelliu API?
  pool
    .query(queryText, [req.body.document_name, req.user.id, req.body.document_link])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log("hispec post Failed: ", err);
      res.sendStatus(500);
    });
});

// ADMIN: Get all high_spec_documents.
router.get("/highspec", rejectUnauthenticated, (req, res) => {
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

// USER: Upload low_spec_document to be sent for analysis.
router.post("/lowspec", rejectUnauthenticated, (req, res, next) => {
  console.log("IN LOWSPEC");
  const queryText = `INSERT INTO "user_document" (document_name, user_id, document_link, time_stamp)
      VALUES ($1, $2, $3, $4) RETURNING id`;
  // TODO: Check intelliu API documentation, how to submit low spec for analysis?
  pool
    .query(queryText, [
      req.body.document_name,
      req.user.id,
      //   req.body.JSON,
      req.body.document_link,
      req.body.time_stamp,
    ])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log("Document Info Upload failed: ", err);
      res.sendStatus(500);
    });
});

//get all docs for current user
router.get("/lowspec", (req, res) => {
  console.log("GET LOWSPEC");
  pool
    .query('SELECT * FROM "user_document" WHERE user_id = $1 ORDER BY id DESC;',[req.user.id])
    .then((result) => {
      // console.log("RESULT GET ALL", result);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error GET /user_document", error);
      res.sendStatus(500);
    });
});



// USER: Get one document results (CURRENTLY DUMMY DATA)
router.get("/get-my-documents/:id", rejectUnauthenticated, (req, res) => {
  //TODO: make API call to IntelliU API to get a users results.
  let docId = req.params.id;
  // let docName = "dummyResult"
  // docName += docId
  // res.send(docName)

  switch (docId) {
    case "60601-1.doc":
      res.send(dummyResult1);
      break;
    case "60601-2.doc":
      res.send(dummyResult2);
      break;
    case "60601-3.doc":
      res.send(dummyResult3);
      break;
    default:
      res.sendStatus(409);
  }
});

// USER: Get my document names
router.get("/names", rejectUnauthenticated, (req, res) => {
  //TODO: make API call to IntelliU API to get a users results.
  return res.send(documentNames);
});

router.delete("/:resultId", rejectUnauthenticated, (req, res) => {
  // TODO: Implement actual delete by deleting from the db, once we have access to the API
  const indexToDelete = documentNames.indexOf(req.params.resultId);
  if (indexToDelete !== -1) {
    documentNames.splice(indexToDelete, 1);
  }
  return res.sendStatus(200);
});

module.exports = router;
