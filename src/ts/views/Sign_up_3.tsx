import React from "react";
import { Link } from "react-router-dom";


export default class Sign_up_3 extends React.Component {
    render() {
        return (
            <div className="form-container" id="sign-up-3">
                {/* Step instructions */}
                <div className="instruction-group">
                    <h3>Sign Up</h3>
                    <h2>Add your bio</h2>

                    {/* Progress */}
                    <label>Step 3/4</label>
                    <div className="progress-bar">
                        <div className="selected"></div>
                        <div className="selected"></div>
                        <div className="selected"></div>
                        <div className="unselected"></div>
                    </div>
                </div>

                {/* Your Bio */}
                <div className="input-group" id="bio">
                    <label>Your Bio</label>
                    <div className="input-textarea">
                        <textarea placeholder="Hello everyone I'm Amogus."></textarea>
                    </div>
                </div>

                {/* Continue button */}
                <Link to="/Sign_up_2" id="button-back">
                    <button className="button-secondary">
                        <label>Back</label>
                    </button>
                </Link>  

                {/* Continue button */}
                <Link to="/Sign_up_4" id="button-continue">
                    <button className="button-primary">
                        <label>Continue</label>
                    </button>
                </Link>     
            </div>
        );
    }
}