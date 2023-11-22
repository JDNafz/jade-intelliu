import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./NewItem.css";
import { useDispatch } from "react-redux";

function NewItem() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [docA, setDocA] = useState(null);
  const [docB, setDocB] = useState(null);
  const [selectedDocument, setSelectedDocument] = useState("Select Document A");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const uploadDocument = (event) => {
    event.preventDefault();
    if (selectedDocument !== "Select Document A") {
      const documents = {
        docA,
        docB,
      };
      dispatch({ type: "UPLOAD_DOCS", payload: documents });
      history.push("/newitemconfirmation");
    } else {
      alert("Please select Document A.");
    }
  };

  const handleSelectDocument = (document) => {
    setSelectedDocument(document);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex flex-row justify-center pt-36">
      <div>
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
      </div>
      <div className="bg-slate-200 px-32 pt-10 pb-28">
        <h2 className="text-5xl p-5">Device Requirements</h2>

        <form onSubmit={uploadDocument}>
          <div className="relative mt-4">
            <button
              type="button"
              onClick={toggleDropdown}
              className="bg-white border rounded-md p-2 w-64 text-left"
            >
              {selectedDocument}
            </button>
            {isDropdownOpen && (
              <ul className="absolute w-64 border bg-white rounded-md mt-1">
                <li
                  onClick={() => handleSelectDocument("Select Document A")}
                  className="py-1 px-3 cursor-pointer hover:bg-gray-200"
                >
                  Select Document A
                </li>
                
              </ul>
            )}
          </div>

          <p className="text-2xl p-4">Upload Document B</p>
          <input
            type="file"
            id="DocB"
            onChange={(e) => setDocB(e.target.files[0])}
          ></input>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Review
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewItem;
