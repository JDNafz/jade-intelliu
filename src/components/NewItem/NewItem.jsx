import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./NewItem.css";
import { useDispatch } from "react-redux";

function NewItem() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [docA, setDocA] = useState("");
  // const [docB, setDocB] = useState(null);
  const [doc, setDoc] = useState(null);

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const regulatoryStandards = ["ABC","XYZ","123","456"];

  const uploadDocument = (event) => {
    event.preventDefault();

    // const documents = {
    //   docA,
    //   docB,
    // };
    // console.log("DOCS", documents);
    // dispatch({ type: "UPLOAD_DOCS", payload: documents });
    dispatch({ type: "UPLOAD_USER_DOCS", payload: doc });

    // history.push("/newitemconfirmation");
  };

  // const handleSelectDocument = (document) => {
  //   setDocA(document);
  //   setDropdownOpen(false);
  // };

  // const toggleDropdown = () => {
  //   setDropdownOpen(!isDropdownOpen);
  // };

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
            <label htmlFor="country">Selected Document</label>
            <select
              id="country"
              value={docA}
              onChange={(e) => setDocA(e.target.value)}
              required
            >
              {regulatoryStandards.map((standard, idx) => {
                return <option key={"REGSTD"+idx} value={standard}>{standard}</option>;
              })}
            </select>
          </div>

          <p className="text-2xl p-4">Upload Document</p>
          <input
            type="file"
            id="DocB"
            onChange={(e) => setDoc(e.target.files[0])}
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
