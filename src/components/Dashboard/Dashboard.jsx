import React, { useEffect, useState } from "react";
import generateExampleData from "./sampleData";
import "./Dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import DeleteConfirmation from "../DeleteConfirmation/DeleteConfirmation";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Dashboard() {
  //20,000 examples takes 2.5 seconds to load
  const exampleData = generateExampleData(20);
  // const rows = exampleData.compare_results;
  // console.log("DATA", exampleData);
  const [selectedResult, setSelectedResult] = useState();
  const history = useHistory();
  // const results = useSelector((store) => store.results);
  console.log("RESULTS BEING TRACKED", selectedResult);

  // TODO: DocumentNames Reducer Is used for Dummy Data Only
  const documentNames = useSelector((store) => store.documentNames);

  // TODO:  User Docs Is used for Live Data Only
  const userDocs = useSelector((store) => store.userDocs);
  console.log("User Docs Is:", userDocs)
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // console.log(results, "RESULTS");
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedResult?.length > 0) {
      dispatch({
        type: "FETCH_DOCUMENTS",
        payload: selectedResult,
      });
    }
  }, [selectedResult]);

  useEffect(() => {
    dispatch({
      type: "FETCH_USER_DOCS",
    });
  }, []);

  //This function possibly Needs to Be Deleted?
  const clearSelectedResult = () => {
    setSelectedResult();
  };

  function convertEpochToSpecificTimezone(timeEpoch, offset = 200) {
    var d = new Date(timeEpoch);
    var utc = d.getTime() + d.getTimezoneOffset() * 4715500000;
    var nd = new Date(utc + 3600000 * offset);
    return nd.toLocaleString();
  }

  const prettyTime = (time, offset) =>
    convertEpochToSpecificTimezone(time, offset);

  return (
    <>
      <div className="dashboard flex justify-center pt-32 px-3">
        <div className="resultsList min-w-fit px-5 text-2xl">
          <h2 className="text-center py-5">Analysis Results</h2>
          <ul>
            {userDocs?.map((userDoc) => {
              if (selectedResult?.id === userDoc?.id) {
                console.log("Selected Result:", selectedResult?.id, "userDoc:", userDoc?.id);
                return (<li key={userDoc.id} onClick={() => setSelectedResult(userDoc)}>
                  {/* <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Standard ID: {userDoc.JSON.high_level_spec_name}</button> */}
                  <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    Standard ID: {userDoc.JSON.high_level_spec_name}</button>
                </li>)
              }
              return (
                <li key={userDoc.id} onClick={() => setSelectedResult(userDoc)}>
                  {/* <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Standard ID: {userDoc.JSON.high_level_spec_name}</button> */}
                  <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                    Standard ID: {userDoc.JSON.high_level_spec_name}</button>
                </li>
              )
            })}
          </ul>
        </div>

        {userDocs ? (
          <div className="resultDisplay max-w-6xl flex flex-col bg-slate-200 px-3">
            <h1 className="text-2xl font-bold text-center py-5	">Analysis Result:</h1>
            <div className="buttonContainer flex justify-between">
              <a href="https://res.cloudinary.com/dae8japsd/raw/upload/v1700153775/Demo_Doc_pss4yk.xlsx" download>
                <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                  Download File
                </button>
              </a>
              <button
                onClick={() => setShowDeleteModal(true)}
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Delete Result
              </button>
            </div>
            <table className="myTable">
              <thead>
                <tr>
                  {/* <th>Doc Compare Id</th> */}
                  <th>High Level Spec Id</th>
                  <th>Low Level Spec Id</th>
                  <th>Analysis TimeStamp</th>
                  <th>Analysis Result</th>
                  <th>Analysis Score</th>
                  <th>Result Reason</th>
                  <th>Result Feedback</th>
                </tr>
              </thead>
              <tbody>
                {selectedResult?.JSON.compare_results?.map((row, index) => (
                  <tr key={index}>
                    {/* <td>{row.doc_compare_id}</td> */}
                    <td>{row.high_level_spec_id}</td>
                    <td>{row.low_level_spec_id}</td>
                    <td>{prettyTime(row.analysis_timestamp)}</td>
                    <td>{row.analysis_result}</td>
                    <td>{row.analysis_score}</td>
                    <td>{row.result_reason}</td>
                    <td>{row.result_feedback}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <>
            <div className="flex flex-col items-center bg-slate-200 px-[300px] pt-[100px] pb-[300px] justify-center text-center">
              <h2 className="font-sans font-bold text-2xl mb-8">No results yet...</h2>

              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => history.push("/newitem")}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Submit New Item
                </button>

                <button
                  onClick={() => history.push("/loadingscreen")}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  View Submissions
                </button>
              </div>
            </div>
          </>
        )}

        {showDeleteModal && (
          <DeleteConfirmation
            documentName={selectedResult}
            close={() => {
              dispatch({
                type: "FETCH_DOCUMENT_NAMES",
              });
              setSelectedResult(documentNames[1]);
              setShowDeleteModal(false);
            }}
          />
        )}
      </div>
    </>
  );
}

export default Dashboard;

//example of a few
const resultJSON = {
  high_level_spec_name: "60601-1.doc",
  low_level_spec_name: "software_requirements.doc",
  compare_results: [
    {
      doc_compare_id: "1_1",
      high_level_spec_id: "iso_80131_195",
      low_level_spec_id: "SRS3513",
      //epoch time in seconds (unix)
      analysis_timestamp: 1699286271,
      analysis_result: "yes",
      analysis_score: 3.51,
      result_reason: "result reason N/A",
      result_feedback: "user feedback for IntelliU",
    },
    {
      doc_compare_id: "2_1",
      high_level_spec_id: "iso_280131_195",
      low_level_spec_id: "SRS3513",
      //epoch time in seconds (unix)
      analysis_timestamp: 1699286271,
      analysis_result: "yes",
      analysis_score: 6.51,
      result_reason: "result reason N/A",
      result_feedback: "user feedback for IntelliU",
    },
    {
      doc_compare_id: "3_1",
      high_level_spec_id: "iso_380131_195",
      low_level_spec_id: "SRS3513",
      //epoch time in seconds (unix)
      analysis_timestamp: 1699286271,
      analysis_result: "yes",
      analysis_score: 9.51,
      result_reason: "result reason N/A",
      result_feedback: "user feedback for IntelliU",
    },
  ],
};
const resultList = resultJSON.compare_results;
