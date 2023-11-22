const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const encryptLib = require("../modules/encryption");
const pool = require("../modules/pool");

const dummyResult1 = require("../modules/DummyData/dummydata1");
const dummyResult2 = require("../modules/DummyData/dummydata2");
const dummyResult3 = require("../modules/DummyData/dummydata3");

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
router.get("/get-my-documents/:id", rejectUnauthenticated, (req, res) => {
  //TODO: make API call to IntelliU API to get a users results.
  let docId = Number(req.params.id);
  // let docName = "dummyResult"
  // docName += docId
  // res.send(docName)

  switch (docId) {
    case 1:
      res.send(dummyResult1);
      break;
    case 2:
      res.send(dummyResult2);
      break;
    case 3:
      res.send(dummyResult3);
      break;
      default: 
      res.sendStatus(409);
  }
});

// router.delete("/:eventid", rejectUnauthenticated, (req, res) => {
//   if (req.user.role !== "admin") {
//     return res.status(403).send("Unauthorized");
//   }
//   let eventid = req.params.eventid;
//   const queryText = `
//   DELETE FROM "event" WHERE "id" = $1;
//   `;
//   pool
//     .query(queryText, [eventid])
//     .then((result) => {
//       res.sendStatus(200);
//     })
//     .catch((err) => {
//       console.log(`Error making query ${queryText}`, err);
//       res.sendStatus(500);
//     });
// });

module.exports = router;
