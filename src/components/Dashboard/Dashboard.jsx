import React, { useState } from "react";
import generateExampleData from "./sampleData";
import "./Dashboard.css";

function Dashboard() {
  //20,000 examples takes 2.5 seconds to load
  const exampleData = generateExampleData(20);
  const rows = exampleData.compare_results;

  const [selectedResult, setSelectedResult] = useState();

  const selectResult = (result) => {
    setSelectedResult(result);
  };

  const clearSelectedResult = () => {
    setSelectedResult();
  };
  const handleDownload = () => {
   
  };

  function convertEpochToSpecificTimezone(timeEpoch, offset) {
    var d = new Date(timeEpoch);
    var utc = d.getTime() + d.getTimezoneOffset() * 4715500000;
    var nd = new Date(utc + 3600000 * offset);
    return nd.toLocaleString();
  }

  const prettyTime = (time, offset) =>
    convertEpochToSpecificTimezone(time, offset);

  return (
    <>
      <div className="dashboard flex pt-32 px-3">
        <div className="resultsList min-w-fit px-5 text-2xl">
        <h2>Results (List)</h2>
          <ul>
            {rows.map((row) => (
              <li key={row.doc_compare_id} onClick={() => selectResult(row)}>
                <p>Document {row.doc_compare_id}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="resultDisplay max-w-6xl flex flex-col bg-slate-200 px-3">
          <h1 className="text-2xl font-bold text-center	">Result</h1>
          <div className="buttonContainer flex justify-between">
              <button className="rounded-full bg-sky-500/50 p-2">
                Download File📄
              </button>
              <button className="rounded-full bg-sky-500/50 p-2">
                Delete Result❌
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
              {rows.map((row) => (
                <tr key={row.doc_compare_id}>
                  {/* <td>{row.doc_compare_id}</td> */}
                  <td>{row.high_level_spec_id}</td>
                  <td>{row.low_level_spec_id}</td>
                  <td>{row.analysis_timestamp}</td>
                  <td>{row.analysis_result}</td>
                  <td>{row.analysis_score}</td>
                  <td>{row.result_reason}</td>
                  <td>{row.result_feedback}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
