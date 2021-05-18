import React from "react";
import { Link } from "react-router-dom";
import Search from '../components/SkillPicker';
import { InstructionSet } from '../components/TextElements';
import { Button } from '../components/Buttons';

export default class Sign_up_4 extends React.Component {
    render() {
        return (
            <div className="form-container" id="sign-up-4">
                {/* Step instructions */}
                <InstructionSet title="Pick your skills" subtitle="Sign Up" currentSteps={4} totalSteps={4} />

                {/* Skill picker */}
                <Search />

                {/* Continue button */}
                <Link to="/Sign_up_3" id="button-back">
                    <Button label="Back" className="button-secondary" />
                </Link>  

                {/* Continue button */}
                <Link to="/End" id="button-continue">
                    <Button label="Finish up" className="button-primary" />
                </Link>

                {/* TOS agreement */}
                <p className="TOS right">
                    By clicking this button you agree to our
                    <a href="https://noove.org/tos"> Terms of Service</a>
                </p> 
                
            </div>
        );
    }
}