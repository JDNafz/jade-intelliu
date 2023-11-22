import React from "react";

function AdminResults() {
  return (
    <div className="container mx-auto max-w-2xl my-8">
      {/* If intelliU wants to run their own analysis we can use this page to give them results.
        is it needed? if so how do we go about doing it? */}
      <h1 className="text-2xl font-bold text-center mb-4">
        Uploaded High Spec Document
      </h1>
      <div>
        <table className="table-fixed w-full border">
          <thead>
            <tr>
              <th className="border p-2">Regulatory Id</th>
              <th className="border p-2">Regulatory Name</th>
              <th className="border p-2">Document Name</th>
              <th className="border p-2">Upload Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">13434324</td>
              <td className="border p-2">Heart Pump</td>
              <td className="border p-2">Heart_pump.pdf</td>
              <td className="border p-2">12 July 2023</td>
            </tr>
            <tr>
              <td className="border p-2">16756724</td>
              <td className="border p-2">Insulin Device</td>
              <td className="border p-2">Insulin_Device.pdf</td>
              <td className="border p-2">04 June 2023</td>
            </tr>
            <tr>
              <td className="border p-2">58585994</td>
              <td className="border p-2">Inhaler</td>
              <td className="border p-2">Inhaler.pdf</td>
              <td className="border p-2">05 March 2023</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminResults;

