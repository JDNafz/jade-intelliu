import React from "react";
import { useHistory } from "react-router-dom";

function NewItemConfirmation() {
  const history = useHistory();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Please Review Documents For Submission</h2>
        <p className="mb-4">Files Submitted</p>
      </div>

      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => { history.push("/newitem"); }}
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700"
        >
          Cancel
        </button>

        <button
          onClick={() => { history.push("/loadingscreen"); }}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default NewItemConfirmation;
