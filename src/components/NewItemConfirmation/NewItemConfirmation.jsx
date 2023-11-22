import React from "react";
import { useHistory } from "react-router-dom";

function NewItemConfirmation() {
  const history = useHistory();

  return (
    <div className="container mx-auto max-w-lg my-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Please Review Documents For Submission</h2>
      {/* Files Submitted is a placeholder for displaying the docs uploaded later */}
      <p className="mb-4">Files Submitted</p>

      <button
        onClick={() => { history.push("/newitem"); }}
        className="bg-gray-500 text-white py-2 px-4 rounded mr-4 hover:bg-gray-700"
      >
        Cancel
      </button>

      <button
        onClick={() => { history.push("/loadingscreen"); }}
        className="bg-blue-500 text-white py-2 px-4 rounded mr-4 hover:bg-blue-700"
      >
        Submit
      </button>

      <button
        onClick={() => { history.push("/newitem"); }}
        className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700"
      >
        Back
      </button>
    </div>
  );
}

export default NewItemConfirmation;
