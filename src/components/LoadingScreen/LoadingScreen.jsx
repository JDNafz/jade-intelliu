import React from "react";
import "./LoadingScreen.css";

function LoadingScreen() {

    return (
        <>
        <h2>Files Submitted</h2>
        <p>File 1</p>
        <p>File 2</p>
        <div className="lds-dual-ring"></div>
        <button>Back</button>
        </>
    )
}

export default LoadingScreen;