import React, { useState } from "react";
import generateExampleData from "./sampleData";
import './Dashboard.css';

function Dashboard() {
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
      <h1 className="text-2xl font-bold text-center">Result</h1>
      <div className="flex">
        
        <div className="left-column">
          <h2>Results (List)</h2>
          <ul>
            {rows.map((row) => (
              <li key={row.doc_compare_id} onClick={() => selectResult(row)}>
                <p>Doc Compare ID: {row.doc_compare_id}</p>
              </li>
            ))}
          </ul>
        </div>

        
        <div className="right-column">
          {selectedResult && (
            <div className="selected-result">
              <h2>Selected Result Details</h2>
              <p>Doc Compare ID: {selectedResult.doc_compare_id}</p>
              <p>High Level Spec ID: {selectedResult.high_level_spec_id}</p>
              <p>Low Level Spec ID: {selectedResult.low_level_spec_id}</p>
              <p>Analysis TimeStamp: {prettyTime(selectedResult.analysis_timestamp, 0)}</p>
              <p>Analysis Result: {selectedResult.analysis_result}</p>
              <p>Analysis Score: {selectedResult.analysis_score}</p>
              <p>Result Reason: {selectedResult.result_reason}</p>
              <p>Result Feedback: {selectedResult.result_feedback}</p>
              <button onClick={clearSelectedResult}>Close</button>
              <button onClick={handleDownload}>Download File📄</button>

            </div>
          )}
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
