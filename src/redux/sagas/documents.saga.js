import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// Documents Saga: will be fired on "FETCH_DOCUMENTS" actions
function* fetchDocuments(action) {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.get(
      "/api/document/get-my-documents/" + action.payload,
      config
    );
    // console.log("will this CONSOLE LOG");

    yield put({ type: "SET_RESULTS", payload: response.data });
    // console.log("setting REDUCER");
  } catch (error) {
    console.log("User get request failed", error);
  }
}

function* fetchDocumentNames() {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const response = yield axios.get("/api/document/names", config);

    yield put({ type: "SET_DOCUMENT_NAMES", payload: response.data });
    yield put({ type: "UNSET_RESULTS" });
  } catch (error) {
    console.log("User get request failed", error);
  }
}

function* deleteDocument(action) {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    // console.log(action.payload, 'DOCUMENT.PAYLOAD');

    const response = yield axios.delete(
      "/api/document/" + action.payload,
      config
    );

    yield put({ type: "FETCH_DOCUMENTS" });
  } catch (error) {
    console.log("User get request failed", error);
  }
}

function* uploadUserDocuments(action) {
  const doc = action.payload;
  try{
    const data = new FormData();
    data.append("file", doc);
    data.append("upload_preset", "intelliU");

    const res = yield axios.post(
      `https://api.cloudinary.com/v1_1/dae8japsd/upload`,
      data
    );
    const document_link = res.data.secure_url;
    const docSubmission = {
      document_name : doc.name,
      time_stamp : doc.lastModified,
      document_link,
    }
    console.log("doc Submission", docSubmission);
    yield axios.post("/api/document/lowspec", docSubmission);
    // yield axios.post("/api/document/highspec", docSubmission);


  } catch (error) {
    console.log("Error uploading Document", doc.name, "error:", error);
  }
}
function* uploadAdminDocument(action) {
  const doc = action.payload;
  try{
    const data = new FormData();
    data.append("file", doc);
    data.append("upload_preset", "intelliU");

    const res = yield axios.post(
      `https://api.cloudinary.com/v1_1/dae8japsd/upload`,
      data
    );
    const document_link = res.data.secure_url;
    const docSubmission = {
      document_name : doc.name,
      time_stamp : doc.lastModified,
      document_link,
    }
    console.log("doc Submission", docSubmission);
    // yield axios.post("/api/document/lowspec", docSubmission);
    yield axios.post("/api/document/highspec", docSubmission);
    put ({type: "FETCH_STANDARDS"})

  } catch (error) {
    console.log("Error uploading Document", doc.name, "error:", error);
  }
}


function* getAllUserDocs(){
  try { 
    const result = yield axios.get("/api/document/lowspec");
    console.log("RESULT FROM DOCS GET ALLLLLLL:", result.data);
  } catch (error) {
    console.log("getall docs error:", error);
  }
}


function* fetchStandards(){
  try {
    const result = yield axios.get("/api/document/highspec");
    // console.log("RESULT FROM GET STANDARDS:", result.data);
    yield put({ type: "SET_STANDARDS", payload: result.data })
  } catch (error) {
    console.log("error fetching standards:", error);
  }
}
//TODO STRETCH: Actually send documents to IntelliU
function* docsToIntelliU(){
try {
  

} catch (error) {
  console.log("error submitting docs to intelliU", error);
}

}

function* documentsSaga() {
  yield takeLatest("FETCH_DOCUMENTS", fetchDocuments);
  yield takeLatest("FETCH_DOCUMENT_NAMES", fetchDocumentNames);
  yield takeLatest("DELETE_DOCUMENT", deleteDocument);
  yield takeLatest("UPLOAD_USER_DOCS", uploadUserDocuments);
  yield takeLatest("DOCS_TO_INTELLIU", docsToIntelliU);
  yield takeLatest("FETCH_STANDARDS", fetchStandards);
  yield takeLatest("UPLOAD_ADMIN_DOCUMENT",uploadAdminDocument);
}

export default documentsSaga;
