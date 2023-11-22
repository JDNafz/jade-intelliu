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

function* uploadDocuments(action) {
  const docA = action.payload.docA;
  const docB = action.payload.docB;
  try {
    const data = new FormData();
    data.append("file", docA);
    data.append("upload_preset", "intelliU");

    console.log("SAGA COMPLETE, DATA:", data);
    const res = yield axios.post(
      `https://api.cloudinary.com/v1_1/dae8japsd/upload`,
      data
    );
    console.log("RESPONSE:", res.data.secure_url);
    //return res.data.secure_url;
  } catch (error) {
    console.log("try1", error);
  }
  try {
    const data2 = new FormData();
    data2.append("file", docB);
    data2.append("upload_preset", "intelliU");

    // console.log("SAGA COMPLETE, DATA:", data2);
    const res2 = yield axios.post(
      `https://api.cloudinary.com/v1_1/dae8japsd/upload`,
      data2
    );
    console.log("RESPONSE:", res2.data.secure_url);

  } catch (error) {
    console.log("try2", error);
  }
}

function* documentsSaga() {
  yield takeLatest("FETCH_DOCUMENTS", fetchDocuments);
  yield takeLatest("FETCH_DOCUMENT_NAMES", fetchDocumentNames);
  yield takeLatest("DELETE_DOCUMENT", deleteDocument);
  yield takeLatest("UPLOAD_DOCS", uploadDocuments);
}

export default documentsSaga;
