import React from "react";
import "./LoadingScreen.css";
import { useHistory } from "react-router-dom";

function LoadingScreen() {
    const history = useHistory();

    return (
        <>
        <h2>Files Submitted</h2>
        <p>File 1</p>
        <p>File 2</p>
        <div className="lds-dual-ring"></div>
        <button className="rounded-full bg-sky-500/50 p-2" onClick={() => history.push('/dashboard')}>Back to Dashboard</button>

        </>
    )
}

export default LoadingScreen;