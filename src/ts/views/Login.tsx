import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { TextInput, PasswordInput } from '../components/Inputs';
import { Divider } from '../components/TextElements';
import { SocialButton, Button } from '../components/Buttons';

export default class Login extends React.Component {
    render() {
        return (
            <div className="form-container" id="login">

                {/* Noove logo */}
                <img src={require('../../assets/noove-logo.svg')} className="logo" />

                {/* Continue with Google */}
                <SocialButton mediaType="google" />

                {/* Continue with Facebook */}
                <SocialButton mediaType="facebook" />

                {/* OR divider */}
                <Divider />

                {/* Username */}
                <TextInput topLabel="Username" value={(value: any) => {console.log(value);}} />

                {/* Password */}
                <PasswordInput topLabel="Password" value={(value: any) => {console.log(value);}} />
          
                {/* Sign in button */}
                <Link to="/End" id="button-sign-in">
                    <Button label="Sign in" className="button-primary" />
                </Link>

                {/* Sign up button */}
                <Link to="/Sign_up_1" id="button-sign-up">
                    <Button label="Create an account" className="button-tertiary" />
                </Link>
                
            </div>
        );
    }
}