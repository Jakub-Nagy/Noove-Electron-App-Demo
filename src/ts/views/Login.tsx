import React from "react";
import { Link } from "react-router-dom";
import {EyeIcon,EyeClosedIcon} from '@primer/octicons-react'

export default class Login extends React.Component {
    render() {
        return (
            <div className="form-container" id="login">

                {/* Noove logo */}
                <img src={require('../../assets/noove-logo.svg')} className="logo" />

                {/* Continue with Google */}
                <button className="continue-with-button google">
                    <img src={require('../../assets/icon-google.svg')} />
                    <label>Continue with Google</label>
                </button>

                {/* Continue with Facebook */}
                <button className="continue-with-button facebook">
                    <img src={require('../../assets/icon-facebook.svg')} />
                    <label>Continue with Facebook</label> 
                </button>

                {/* OR divider */}
                <div className="or-divider">
                    <p>OR</p>
                    <span className="line"></span>
                </div>

                {/* Username or email */}
                <div className="input-group">
                    <label>Username</label><br/>
                    <div className="input-text">
                        <input type="text" />
                    </div>
                </div>

                {/* Password */}
                <div className="input-group">
                    <label>Password</label><br/>
                    <div className="input-password">
                        <input type="password" />
                        <EyeClosedIcon size={20} />
                    </div>
                </div>
          
                {/* Primary button */}
                <Link to="/End" id="button-sign-in">
                    <button className="button-primary">
                        <label>Sign in</label>
                    </button>
                </Link>

                {/* Secondary button */}
                <Link to="/Sign_up_1" id="button-sign-up">
                    <button className="button-secondary">
                        <label>Create an account</label>
                    </button>
                </Link>
                
            </div>
        );
    }
}