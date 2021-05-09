import React from "react";
import { Link } from "react-router-dom";
import {EyeIcon,EyeClosedIcon,XIcon,CheckIcon} from '@primer/octicons-react';


export default class Sign_up_1 extends React.Component {
    render() {
        return (
            <div className="form-container" id="sign-up-1">
                {/* Step instructions */}
                <div className="instruction-group">
                    <h2>Sign Up</h2>
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

                {/* Email */}
                <div className="input-group" id="email">
                    <label>Email address</label>
                    <span className="input-text">
                        <input type="text" placeholder="example@example.example" />
                    </span>
                </div>

                {/* Password */}
                <div className="input-group" id="password">
                    <label>Password</label>
                    <div className="input-password">
                        <input type="password" />
                        <EyeClosedIcon size={20} />
                    </div>
                </div>

                {/* Password validator */}
                <div className="password-validator">
                    <span>
                        <CheckIcon size={17} fill="#79E453" />
                        <label>Cannot contain your name or email address</label>
                    </span>
                    <span>
                        <CheckIcon size={17} fill="#79E453" />
                        <label>Contains at least 1 number</label>
                    </span>
                    <span>
                        <XIcon size={17} fill="#EB0877" />
                        <label>Contains at least 1 uppercase and 1 lowercase character</label>
                    </span>
                    <span>
                        <CheckIcon size={17} fill="#79E453" />
                        <label>At least 8 characters long</label>
                    </span>
                </div>

                {/* Continue button */}
                <Link to="/" id="button-continue">
                    <button className="button-primary">
                        <label>Continue</label>
                    </button>
                </Link>     
            </div>
        );
    }
}