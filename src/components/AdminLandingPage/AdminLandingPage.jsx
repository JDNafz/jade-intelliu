import React from "react";

function AdminLandingPage() {

    const handleAddDocument = () => {
        
    }

    return (
        <div className="container mx-auto max-w-lg my-8">
            <h2 className="text-3xl font-bold mb-4">Add Regulatory Standard:</h2>
            <form className="mb-4">
                <p>Create Document A</p>
                <input type="file" id="DocA" className="border p-2 mb-2"></input>
                <button
                    type="submit"
                    onClick={handleAddDocument}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                    ➕ Add
                </button>
            </form>
            <table className="w-full border">
                <thead>
                    <tr>
                        <th className="border p-2">Form Name</th>
                        <th className="border p-2">Standard</th>
                        <th className="border p-2">Upload Date</th>
                        <th className="border p-2">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border p-2">ISO 404</td>
                        <td className="border p-2">FDA</td>
                        <td className="border p-2">11/6/23</td>
                        <td className="border p-2">
                            <button
                                className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default AdminLandingPage;
