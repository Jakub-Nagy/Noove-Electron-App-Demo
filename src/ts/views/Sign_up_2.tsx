import React from "react";
import { Link } from "react-router-dom";


export default class Sign_up_1 extends React.Component {
    render() {
        return (
            <div className="form-container" id="sign-up-2">

                {/* Step instructions */}
                <div className="instruction-group">
                    <h3>Sign Up</h3>
                    <h2>Fill in your details</h2>

                    {/* Progress */}
                    <label>Step 2/4</label>
                    <div className="progress-bar">
                        <div className="selected"></div>
                        <div className="selected"></div>
                        <div className="unselected"></div>
                        <div className="unselected"></div>
                    </div>
                </div>

                {/* First name */}
                <div className="input-group" id="first-name">
                    <label>First name</label><br/>
                    <div className="input-text">
                        <input type="text" placeholder="John" />
                    </div>
                </div>

                {/* Last name */}
                <div className="input-group" id="last-name">
                    <label>Last name</label><br/>
                    <div className="input-text">
                        <input type="text" placeholder="Smith" />
                    </div>
                </div>

                {/* Date of birth */}
                <div className="input-group" id="date-of-birth">
                    <label>Date of birth</label>
                    <div className="input-date">
                        <input type="date" />
                    </div>
                </div>

                {/* Occupation */}
                <div className="input-group" id="occupation">
                    <label>Occupation </label>
                    <select className="input-select">
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                        <option value="professional">Professional</option>
                    </select>
                </div>

                {/* Name of educational institution */}
                <div className="input-group" id="edu-name">
                    <label>Name of educational institution</label>
                    <div className="input-text">
                        <input type="text" placeholder="Example School" />
                    </div>
                </div>

                {/* Continue button */}
                <Link to="/Sign_up_1" id="button-back">
                    <button className="button-secondary">
                        <label>Back</label>
                    </button>
                </Link>  

                {/* Continue button */}
                <Link to="/Sign_up_3" id="button-continue">
                    <button className="button-primary">
                        <label>Continue</label>
                    </button>
                </Link>     
            </div>

        );

    }
}