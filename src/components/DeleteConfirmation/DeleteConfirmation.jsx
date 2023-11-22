import React from "react";
import { useHistory } from "react-router-dom";

function DeleteConfirmation() {
    const history = useHistory();

const handleDelete =()=>{

}

    return (
        <div>
        <p>Are you sure you want to delete Result which was completed on (date)?</p>
        <p>This is Irreversible.</p>
        <button onClick= {handleDelete} className="rounded-full bg-sky-500/50 p-2">Permanently Delete</button>
        <button onClick={() => history.push('/dashboard')} className="rounded-full bg-sky-500/50 p-2">Cancel</button>
        </div>
    )

}

export default DeleteConfirmation;