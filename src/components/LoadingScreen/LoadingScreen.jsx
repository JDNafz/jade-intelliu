import React from "react";
import "./LoadingScreen.css";
import { useHistory } from "react-router-dom";

function LoadingScreen() {
    const history = useHistory();

    return (
        <div className="loading-screen-container">
            <div className="centered-content bg-white p-8 border rounded shadow-md">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Files Submitted</h2>
                <p className="text-lg text-gray-700 mb-2">File 1</p>
                <p className="text-lg text-gray-700 mb-4">File 2</p>
                <div className="lds-dual-ring"></div>
            </div>
            <button
                className="back-button rounded-full bg-sky-500/50 p-2"
                onClick={() => history.push('/dashboard')}
            >
                Back to Dashboard
            </button>
        </div>
    );
}

export default LoadingScreen;
