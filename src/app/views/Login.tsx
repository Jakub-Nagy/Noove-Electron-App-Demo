// React Dependencies
import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";

// Components
import { TextInput, PasswordInput } from '../components/Inputs';
import { Divider } from '../components/TextElements';
import { SocialButton, Button } from '../components/Buttons';

// Images
import Logo from '../../assets/noove-logo.svg'

import { useState } from "react";

//Firebase
import { db, auth } from "../utility/Firebase";
import { useRecoilState } from "recoil";
import { userState } from "../utility/User";


const Login = () => {
    const [key, setKey] = useState("");
    const [password, setPassword] = useState("");
    const [history, setHistory] = useState(false);

    const [user] = useRecoilState(userState);
    if(user) return <Redirect to={"/"} />;

    const LogUserIn = async () => {
        const user = await db.collection("users").where("username", "==", key).get();
        const email = user.empty ? key : user.docs[0].data().email;

        const credentails = await auth.signInWithEmailAndPassword(email, password);
        if(!credentails.user) return;

        if(!(await db.collection("users").doc(credentails.user.uid).get()).exists) {
            await credentails.user.delete();
            throw new Error("This account was corrupted and is now deleted");
        }

        setHistory(true);
    };
    if(history) return <Redirect to={"/"} />

    return (
        <div className="form-container" id="login">

            {/* Noove Logo */}
            <img src={Logo} className="logo" alt="Noove Logo" />
            
            {/* Continue with Google */}
            <SocialButton mediaType="google" />

            {/* Continue with Facebook */}
            <SocialButton mediaType="facebook" />

            {/* OR divider */}
            <Divider />

            {/* Username Input */}
            <TextInput
                topLabel="Username or Email"
                valueIn={key}
                valueOut={(value: string) => {
                    setKey(value);
                }}
            />

            {/* Password */}
            <PasswordInput
                topLabel="Password"
                valueIn={password}
                valueOut={(value: string) => {
                    setPassword(value);
                }}
            />

            {/* Sign in button */}
            <Button
                label="Sign in"
                className="button-primary button-sign-in"
                onClick={LogUserIn}
            />

            {/* Link to register form */}
            <Link to="/register">
                <Button label="Create an account" className="button-tertiary" />
            </Link>
        </div>
    );
};

export default Login;