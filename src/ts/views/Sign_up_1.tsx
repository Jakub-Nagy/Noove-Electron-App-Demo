import React from "react";
import { Link } from "react-router-dom";
import {EyeIcon,EyeClosedIcon,XIcon,CheckIcon} from '@primer/octicons-react';


export default class Sign_up_1 extends React.Component {
    render() {
        return (
            <div className="form-container" id="sign-up-1">
                {/* Step instructions */}
                <div className="instruction-group">
                    <h3>Sign Up</h3>
                    <h2>Set up your account</h2>

                    {/* Progress */}
                    <label>Step 1/4</label>
                    <div className="progress-bar">
                        <div className="selected"></div>
                        <div className="unselected"></div>
                        <div className="unselected"></div>
                        <div className="unselected"></div>
                    </div>
                </div>

                {/* Username */}
                <div className="input-group stretch" id="username">
                    <label>Username</label>
                    <div className="input-username">
                        <input type="text" />
                        <span className="available">
                            <span className="dot"></span>
                            Available
                        </span>
                    </div>
                    <label>This will be your unique handle on Noove.org</label>
                </div>

                {/* Email */}
                <div className="input-group stretch" id="email">
                    <label>Email address</label>
                    <span className="input-text">
                        <input type="text" placeholder="example@example.example" />
                        <CheckIcon className="check" size={20} />
                    </span>
                </div>

                {/* Password */}
                <div className="input-group stretch" id="password">
                    <label>Password</label>
                    <div className="input-text">
                        <input type="password" />
                        <EyeClosedIcon size={20} />
                    </div>
                </div>

                {/* Password validator */}
                <div className="password-validator">
                    <span>
                        <CheckIcon className="check" size={17} />
                        <label>Cannot contain your name or email address</label>
                    </span>
                    <span>
                        <CheckIcon className="check" size={17} />
                        <label>Contains at least 1 number</label>
                    </span>
                    <span>
                        <XIcon className="x" size={17} />
                        <label>Contains at least 1 uppercase and 1 lowercase character</label>
                    </span>
                    <span>
                        <CheckIcon className="check" size={17} />
                        <label>At least 8 characters long</label>
                    </span>
                </div>

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