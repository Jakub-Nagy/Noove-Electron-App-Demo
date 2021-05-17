import React from "react";
import { Link } from "react-router-dom";
import { EmailInput, UsernameInput, PasswordVerify } from '../components/Inputs';
import { InstructionSet } from '../components/TextElements';


export default class Sign_up_1 extends React.Component {
    render() {
        return (
            <div className="form-container" id="sign-up-1">
                {/* Step instructions */}
                <InstructionSet title="Set up your account" subtitle="Sign Up" currentSteps={1} totalSteps={4} />

                {/* Username */}
                <UsernameInput className="stretch" topLabel="Username" value={(value: any) => {console.log(value);}} valid="" bottomLabel="This will be your unique handle on Noove.com" />

                {/* Email */}
                <EmailInput className="stretch" topLabel="Email address" value={(value: any) => {console.log(value);}} valid={(value: any) => {console.log(value);}} />

                {/* Password */}
                <PasswordVerify className="stretch" topLabel="Password" value={(value: any) => {console.log(value);}} valid={(value: any) => {console.log(value);}} />

                {/* Continue button */}
                <Link to="/" id="button-back">
                    <button className="button-secondary">
                        <label>Back</label>
                    </button>
                </Link>  

                {/* Continue button */}
                <Link to="/Sign_up_2" id="button-continue">
                    <button className="button-primary">
                        <label>Continue</label>
                    </button>
                </Link>     
            </div>
        );
    }
}