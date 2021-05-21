import React from "react";
import { Link } from "react-router-dom";
import { TextInput, DateInput } from '../components/Inputs';
import { InstructionSet } from '../components/TextElements';
import { Button } from '../components/Buttons';


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
                <DateInput topLabel="Date of birth" value={(value: any) => {console.log(value);}} />

                {/* Occupation */}
                <div className="input-group">
                    <label>Occupation </label>
                    <details className="input-select dropped">
                        <summary>
                            <input type="radio" name="occupation" id="default" title="Pick your position" checked />
                            <input type="radio" name="occupation" id="student" title="Student" />
                            <input type="radio" name="occupation" id="teacher" title="Teacher" />
                            <input type="radio" name="occupation" id="professional" title="Professional" />
                        </summary>
                        <ul>
                            <li>
                                <label htmlFor="student">Student</label>
                            </li>
                            <li>
                                <label htmlFor="teacher">Teacher</label>
                            </li>
                            <li>
                                <label className="selected" htmlFor="professional">Professional</label>
                            </li>
                        </ul>
                    </details>
                </div>                

                {/* Name of educational institution */}
                <TextInput className="stretch" topLabel="Name of educational institution" placeholder="Example School" value={(value: any) => {console.log(value);}} />

                {/* Back button */}
                <Link to="/Sign_up_1" id="button-back">
                    <Button label="Back" className="button-secondary" />
                </Link>  

                {/* Continue button */}
                <Link to="/Sign_up_3" id="button-continue">
                    <Button label="Continue" className="button-primary" />
                </Link>     
            </div>

        );
    }
}