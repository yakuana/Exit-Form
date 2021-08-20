import React, { useState } from "react";

// styles
import "../styles/exitform.css";

// icons
import { BsCheckCircle } from "react-icons/bs";

// rank data
import { shuffledOptions, shuffledObject } from "./RankOptions.js";

// values should match database
const initialState = {
    reason_other: "",
    prevent_other: "",
    ranking: "",
    rankingValues: [],
    other: "",
    contract: "",
    why_leaving: ""
};

const Form = () => {
    const [values, setValues] = useState(initialState);
    const [valid, setValid] = useState(false);
    const [submitted, setSubmit] = useState(false);

    const handleChange = (event) => {

        if (event.target.name === "ranking") {
            // re
            // hard code the last alphabet 
            var rankList = event.target.value.replace(/[^a-p\s]/gi, "").split("");

            // stores the text associated with the user's alphabet choice 
            var finalRanking = []

            // loops through the choices and checks if the alphabet has an associated text value 
            // i.e 
            // var welcome = { a: "hello", b: "bye" } 
            // welcome[a] = "hello"
            // welcome[b] = "bye"
            // welcome[c] = undefined 

            for (let i = 0; i < rankList.length; i++) {
                if (shuffledObject[rankList[i]] !== undefined) {
                    finalRanking.push(shuffledObject[rankList[i]])
                } 
            }

            setValues({
                ...values,
                rankingValues: finalRanking,
                [event.target.name]: rankList
            });

        } else {
            setValues({
                ...values,
                [event.target.name]: event.target.value
            });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(values)

        if (
            values.reason_other !== "" &&
            values.prevent_other !== "" &&
            (values.ranking.length === 3) & (values.ranking !== "") &&
            values.contract !== "" &&
            values.why_leaving !== ""
        ) {
            setValid(true);
        }

        if (valid & submitted) {
            document.getElementById("ef-container").reset();
        }
    };

    if (submitted & valid) {
        return (
            <div id="thank-you-container">
                <h3>Thank you for your submission.</h3>
                <BsCheckCircle className="fade check-circle" />
            </div>
        );
    }

    return (
        <div>
            <div id="exitform-container">
                <h1>Xerox Exit Form</h1>
                <p>We appreciate your feedback. Please fill out the form below to completion.</p>

                <form onSubmit={handleSubmit} id="ef-container">
                    <h2>Please fill in the following fields:</h2>

                    <label>What are your main reasons for leaving Xerox?</label>
                    <textarea 
                        name="reason_other"
                        className="form-textarea"
                        placeholder="My main reasons for leaving Xerox are..."
                        autoComplete="off"
                        value={values.reason_other}
                        onChange={handleChange}
                    />

                    <label>Are you leaving Xerox as your contract is ending?</label>
                    <label>
                        <input
                            type="radio"
                            name="contract"
                            value="Yes"
                            className="form-radio"
                            onChange={handleChange}
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="contract"
                            value="No"
                            className="form-radio"
                            onChange={handleChange}
                        />
                        No
                    </label>
                    {submitted && !values.contract && (
                        <span className="error-message">
                            Please select one of the options above.
                        </span>
                    )}

                    <label>Are you leaving Xerox due to relocation, going back to school or personal reasons?</label>
                    <label>
                        <input
                            type="radio"
                            name="why_leaving"
                            value="Relocation"
                            className="form-radio"
                            onChange={handleChange}
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="why_leaving"
                            value="Going Back to School"
                            className="form-radio"
                            onChange={handleChange}
                        />
                        No
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="why_leaving"
                            value="Personal Reasons"
                            className="form-radio"
                            onChange={handleChange}
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="why_leaving"
                            value="Other"
                            className="form-radio"
                            onChange={handleChange}
                        />
                        No
                    </label>
                    {submitted && !values.why_leaving && (
                        <span className="error-message">
                            Please select one of the options above.
                        </span>
                    )}

                    <label>What actions could have been taken to prevent you from leaving Xerox?</label>
                    <textarea
                        name="prevent_other"
                        className="form-textarea"
                        placeholder="Some preventative actions include..."
                        autoComplete="off"
                        value={values.prevent_other}
                        onChange={handleChange}
                    />
                    {submitted && !values.prevent_other && (
                        <span className="error-message">
                            Please enter a response in the field above.
                        </span>
                    )}

                    <label>
                        Rank the items below in order of how much they contributed to your decision to leave Xerox, with "1" being the most significant contributer?
                        Please select your top three. 
                        <ol type="a">
                            {shuffledOptions.map((option) => (
                                <li key={option}>{option}</li>
                            ))}
                        </ol>
                    </label>

                    <div>
                        <input
                            type="text"
                            name="ranking"
                            className="form-input"
                            placeholder="Top 3 Contributors"
                            autoComplete="off"
                            value={values.ranking}
                            onChange={handleChange}
                        />
                        {submitted && (!values.ranking || !(values.ranking.length === 3)) && (
                            <span className="error-message">Please enter your top 3 choices</span>
                        )}
                    </div>

                    <label>Do you have any other comments, questions, or concerns?</label>
                    <textarea
                        name="other"
                        className="form-textarea"
                        placeholder=""
                        autoComplete="off"
                        value={values.other}
                        onChange={handleChange}
                    />

                    <button
                        type="submit"
                        className="form-button button"
                        onClick={() => setSubmit(true)}
                    >
                       SUBMIT
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;
