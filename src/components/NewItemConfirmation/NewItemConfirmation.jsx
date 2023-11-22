import React from "react";
import { useHistory } from "react-router-dom";

function NewItemConfirmation() {
  const history = useHistory();

  return (
    <>
      <h2>Please Review Documents For Submission</h2>
      {/* Files Submitted is a placeholder for displaying the docs uploaded later */}
      <p>Files Submitted</p>

      <button onClick={() => {history.push("/newitem");}}>Cancel</button>

      <button onClick={() => {history.push("/loadingscreen");}}>Submit</button>

      <button onClick={() => {history.push("/newitem");}}>Back</button>
    </>
  );
}

export default NewItemConfirmation;
