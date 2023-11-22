import React from "react";
import { useHistory } from "react-router-dom";

function RegisterSuccess() {
    const history = useHistory();
  return (
    <>
      <h1>Registration Success</h1>
      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push("/dashboard");
          }}
        >
          Coninue to Dashboard
        </button>
      </center>
    </>
  );
}

export default RegisterSuccess;
