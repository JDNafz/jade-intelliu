import React from "react";
import { useState } from "react";

function FAQs() {

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
                    <button onClick={questionOneButtonPressed} className="accordion">Question 1</button>
                    <div>
                        {questionOneButton ? <></> :
                            <p>Answer to Question 1</p>}
                    </div>
                </div>
                <div>
                    <button onClick={questionTwoButtonPressed} className="accordion">Question 2</button>
                    <div>
                        {questionTwoButton ? <></> :
                            <p>Answer to Question 2</p>}
                    </div>
                </div>
                <div>
                    <button onClick={questionThreeButtonPressed} className="accordion">Question 3</button>
                    <div>
                        {questionThreeButton ? <></> :
                            <p>Answer to Question 3</p>}
                    </div>
                </div>
                <button onClick={questionFourButtonPressed} className="accordion">Question 4</button>
                <div>
                        {questionFourButton ? <></> :
                            <p>Answer to Question 4</p>}
                    </div>
                <button>Back</button>
            </div>
        </>
    )

}

export default FAQs;