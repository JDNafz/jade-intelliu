import React from "react";

function DeleteConfirmation() {

const handleDelete =()=>{

}

const handleCancel =()=>{
    
}

    return (
        <div>
        <p>Are you sure you want to delete Result which was completed on (date)?</p>
        <p>This is Irreversible.</p>
        <button onClick= {handleDelete}>Permanently Delete</button>
        <button onClick= {handleCancel}>Cancel</button>
        </div>
    )

}

export default DeleteConfirmation;