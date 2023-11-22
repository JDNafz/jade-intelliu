const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const encryptLib = require("../modules/encryption");
const pool = require("../modules/pool");

const router = express.Router();

const dummyResult1 = require("../modules/DummyData/dummydata1");
const dummyResult2 = require("../modules/DummyData/dummydata2");
const dummyResult3 = require("../modules/DummyData/dummydata3");

let documentNames = ["60601-1.doc", "60601-2.doc", "60601-3.doc"];

module.exports = router;
