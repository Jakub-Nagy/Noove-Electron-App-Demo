import React from "react";
import { Link } from "react-router-dom";
import { TextInput } from '../components/Inputs';
import { InstructionSet } from '../components/TextElements';


export default class Sign_up_1 extends React.Component {
    render() {
        return (
            <div className="form-container" id="sign-up-2">

                {/* Step instructions */}
                <InstructionSet title="Fill in your details" subtitle="Sign Up" currentSteps={2} totalSteps={4} />

                {/* First name */}
                <TextInput className="left" topLabel="First name" placeholder="John" value={(value: any) => {console.log(value);}} />

                {/* Last Name */}
                <TextInput className="right" topLabel="Last name" placeholder="Cena" value={(value: any) => {console.log(value);}} />

                {/* Date of birth */}
                <div className="input-group" id="date-of-birth">
                    <label>Date of birth</label>
                    <div className="input-date">
                        <input type="date" required />
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
                <TextInput className="stretch" topLabel="Name of educational institution" placeholder="Example School" value={(value: any) => {console.log(value);}} />

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