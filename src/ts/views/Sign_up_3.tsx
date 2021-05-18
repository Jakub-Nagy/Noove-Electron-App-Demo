import React from "react";
import { Link } from "react-router-dom";
import { TextArea } from '../components/Inputs';
import { InstructionSet } from '../components/TextElements';
import { Button } from '../components/Buttons';


export default class Sign_up_3 extends React.Component {
    render() {
        return (
            <div className="form-container" id="sign-up-3">
                {/* Step instructions */}
                <InstructionSet title="Describe yourself" subtitle="Sign Up" currentSteps={3} totalSteps={4} />

                {/* Your Bio */}
                <TextArea topLabel="Your bio" className="stretch" placeholder="Hello everyone I'm Amogus." value={(value: any) => {console.log(value);}} />

                {/* Back button */}
                <Link to="/Sign_up_2" id="button-back">
                    <Button label="Back" className="button-secondary" />
                </Link>  

                {/* Continue button */}
                <Link to="/Sign_up_4" id="button-continue">
                    <Button label="Continue" className="button-primary" />
                </Link>     
            </div>
        );
    }
}