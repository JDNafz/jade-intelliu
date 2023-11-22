import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function NewItem() {
const history = useHistory();

    const uploadDocument = () => {
        history.push('/newitemconfirmation');
    }

    return (
        <>
            <h2>Device Requirements</h2>
            {/*The "Questions" button takes the user to the FAQ Page for information on how to use the system*/}
             <button onClick={() => history.push('/faq')}>Questions</button>

            <form onSubmit={uploadDocument}>
                <p> Documents can be uploaded with the "select Documents" button. </p>
                <p>Select Document A</p>
                <input type="file" id="DocA"></input>
                <p>Select Document B</p>
                <input type="file" id="DocB"></input>
                <button  type="submit">Review</button>
            </form>
        </>
    )

}

export default NewItem;