import React from "react";

function AdminLandingPage() {

    const handleAddDocument = () => {

    }

    return (
        <>
            <h2>Add Regulatory Standard:</h2>
            <form>
                <p>Create Document A</p>
                <input type="file" id="DocA"></input>
                <button type="Submit" onClick={handleAddDocument}>➕</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Form Name</th>
                        <th>Standard</th>
                        <th>Upload Date</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ISO 404</td>
                        <td>FDA</td>
                        <td>11/6/23</td>
                        <td><button >Delete</button></td>
                    </tr>
                </tbody>
            </table >
        </>
    )

}

export default AdminLandingPage;