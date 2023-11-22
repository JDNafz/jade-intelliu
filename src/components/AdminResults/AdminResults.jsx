import React from "react";


function AdminResults() {
  return (
    <>
      <h1 className="text-2xl font-bold text-center	">
        Uploaded High Spec Document
      </h1>
      <h2></h2>
      <div>
        <table className="table-fixed">
          <thead>
            <tr>
              <th>Regulatory Id</th>
              <th>Regulatory Name</th>
              <th>Document Name</th>
              <th>Upload Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>13434324</td>
              <td>Heart Pump</td>
              <td>Heart_pump.pdf</td>
              <td>12 July 2023</td>
            </tr>
            <tr>
              <td>16756724</td>
              <td>Insulin Device</td>
              <td>Insulin_Device.pdf</td>
              <td>04 June 2023</td>
            </tr>
            <tr>
              <td>58585994</td>
              <td>Inhaler</td>
              <td>Inhaler.pdf</td>
              <td>05 March 2023</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminResults;


