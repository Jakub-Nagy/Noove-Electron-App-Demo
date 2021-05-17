import React from "react";
import { Link } from "react-router-dom";
import { InstructionSet } from '../components/TextElements';


export default class Sign_up_3 extends React.Component {
    render() {
        return (
            <div className="form-container" id="sign-up-3">
                {/* Step instructions */}
                <InstructionSet title="Describe yourself" subtitle="Sign Up" currentSteps={3} totalSteps={4} />

                {/* Your Bio */}
                <div className="input-group stretch" id="bio">
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