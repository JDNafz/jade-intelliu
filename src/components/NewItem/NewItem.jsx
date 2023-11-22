import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import "./NewItem.css";

function NewItem() {
  const history = useHistory();

  const uploadDocument = () => {
    history.push("/newitemconfirmation");
  };

  return (
    <div className="flex flex-row justify-center pt-36">
      <div>
        {/*The "Questions" button takes the user to the FAQ Page for information on how to use the system*/}
        <button
          type="button"
          onClick={() => history.push("/faq")}
          className="
          absolute left-20
          text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
          hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300
          dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Questions
        </button>
        {/* https://flowbite.com/docs/components/buttons/ */}
      </div>
      <div className="bg-slate-200 px-32 pt-10 pb-28">
        <h2 className="text-5xl p-5">Device Requirements</h2>

        <form onSubmit={uploadDocument}>
          <p className="text-2xl p-4">Select Document A</p>
          <input type="file" id="DocA"></input>
          <p className="text-2xl p-4">Select Document B</p>
          <input type="file" id="DocB"></input>
          <button type="submit">Review</button>
        </form>
      </div>
    </div>
  );
}

export default NewItem;
