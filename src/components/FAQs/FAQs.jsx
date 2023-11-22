import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function FAQs() {
const history = useHistory();

    const [questionOneButton, setquestionOneButton] = useState(true);
    const [questionTwoButton, setquestionTwoButton] = useState(true);
    const [questionThreeButton, setquestionThreeButton] = useState(true);
    const [questionFourButton, setquestionFourButton] = useState(true);

    const questionOneButtonPressed = () => {
        console.log("question 1 button pressed", questionOneButton)
        setquestionOneButton(!questionOneButton)
    };
    const questionTwoButtonPressed = () => {
        console.log("question 1 button pressed", questionTwoButton)
        setquestionTwoButton(!questionTwoButton)
    };
    const questionThreeButtonPressed = () => {
        console.log("question 1 button pressed", questionThreeButton)
        setquestionThreeButton(!questionThreeButton)
    };
    const questionFourButtonPressed = () => {
        console.log("question 1 button pressed", questionFourButton)
        setquestionFourButton(!questionFourButton)
    };
    return (
        <>
          <div>
            <h2>FAQ's</h2>
    
            <div>
              <button onClick={questionOneButtonPressed} className="accordion">
                How do I submit documents?
              </button>
              <div>
                {questionOneButton ? (
                  <></>
                ) : (
                  <p>
                    To submit documents, go to the "New Item" page and follow the
                    instructions to upload your documents.
                  </p>
                )}
              </div>
            </div>
            <div>
              <button onClick={questionTwoButtonPressed} className="accordion">
                What types of documents are accepted?
              </button>
              <div>
                {questionTwoButton ? (
                  <></>
                ) : (
                  <p>
                    We accept a variety of document types, including PDFs, Word
                    documents, and image files. Please make sure your documents meet
                    our formatting requirements.
                  </p>
                )}
              </div>
            </div>
            <div>
              <button onClick={questionThreeButtonPressed} className="accordion">
                When can I expect results?
              </button>
              <div>
                {questionThreeButton ? (
                  <></>
                ) : (
                  <p>
                    Results processing typically takes 2-3 business days. You will
                    be notified once your documents have been reviewed and processed.
                  </p>
                )}
              </div>
            </div>
            <button onClick={questionFourButtonPressed} className="accordion">
              Can I edit my submitted documents?
            </button>
            <div>
              {questionFourButton ? (
                <></>
              ) : (
                <p>
                  Unfortunately, once documents are submitted, they cannot be
                  edited. Please make sure your documents are accurate before
                  uploading.
                </p>
              )}
            </div>
            <button onClick={() => history.push('/newitem')}>Back</button>

            
          </div>
        </>
      );
    }
    
    export default FAQs;