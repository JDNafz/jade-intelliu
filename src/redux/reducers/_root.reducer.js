import { combineReducers } from "redux";
import errors from "./errors.reducer";
import user from "./user.reducer";
import results from "./user_results.reducer";
import documentNames from "./document_names.reducer";
import { submittedDocs } from "./submittedDocs.reducer";
import { standards } from "./standards.reducer";
import  userDocs  from "./user_doc.reducer";

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user,
  results,
  documentNames, // will have an id and username if someone is logged in
  submittedDocs,
  standards,
  userDocs
});

export default rootReducer;
