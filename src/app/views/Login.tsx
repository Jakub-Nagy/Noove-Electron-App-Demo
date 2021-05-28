// React Dependencies
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

// Components
import { TextInput, PasswordInput } from '../components/Inputs';
import { Divider } from '../components/TextElements';
import { SocialButton, Button } from '../components/Buttons';

// Images
import Logo from '../../assets/noove-logo.svg'

export default class Login extends React.Component {

    render() {
        
        return (
            <div className="form-container" id="login">

                {/* Noove logo */}
                <img src={Logo} className="logo" alt="Noove Logo" />

                {/* Continue with Google */}
                <SocialButton mediaType="google" />

                {/* Continue with Facebook */}
                <SocialButton mediaType="facebook" />

                {/* OR divider */}
                <Divider />

                {/* Username */}
                <TextInput topLabel="Username" valueIn={(value: any) => {console.log(value);}} valueOut={(value: any) => {console.log(value);}} />

                {/* Password */}
                <PasswordInput topLabel="Password" valueIn={(value: any) => {console.log(value);}} valueOut={(value: any) => {console.log(value);}} />
          
                {/* Sign in button */}
                <Link to="/end" id="button-sign-in">
                    <Button label="Sign in" className="button-primary" />
                </Link>

                {/* Sign up button */}
                <Link to="/register">
                    <Button label="Create an account" className="button-tertiary" />
                </Link>
                
            </div>
        );
    }
}