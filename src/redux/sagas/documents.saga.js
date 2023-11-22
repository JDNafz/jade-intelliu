import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Documents Saga: will be fired on "FETCH_DOCUMENTS" actions
function* fetchDocuments(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    const response = yield axios.get('/api/document/get-my-documents/'+ action.payload, config);
    // console.log("will this CONSOLE LOG");

    yield put({ type: 'SET_RESULTS', payload: response.data });
    console.log("setting REDUCER");
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* fetchDocumentNames() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('/api/document/names', config);

    yield put({ type: 'SET_DOCUMENT_NAMES', payload: response.data });
    yield put({ type: 'UNSET_RESULTS' });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* deleteDocument(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json'},
      withCredentials: true,
    };
    // console.log(action.payload, 'DOCUMENT.PAYLOAD');

    const response = yield axios.delete('/api/document/' + action.payload, config);

    yield put({ type: 'FETCH_DOCUMENTS'});
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* documentsSaga() {
  yield takeLatest('FETCH_DOCUMENTS', fetchDocuments);
  yield takeLatest('FETCH_DOCUMENT_NAMES', fetchDocumentNames);
  yield takeLatest('DELETE_DOCUMENT', deleteDocument);

}

export default documentsSaga;
