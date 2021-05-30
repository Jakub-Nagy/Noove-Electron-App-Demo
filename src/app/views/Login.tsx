// React Dependencies
import { Link } from "react-router-dom";

// Components
import { TextInput, PasswordInput } from '../components/Inputs';
import { Divider } from '../components/TextElements';
import { SocialButton, Button } from '../components/Buttons';
import { emailRegex } from "../utility/Regex";

// Images
import Logo from '../../assets/noove-logo.svg';

//Firebase and state management
import { db, auth } from "../utility/FirebaseConfiguration";
import { useState } from "react";


const Login = () => {
    const [key, setKey] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleError = (errorCode: string) => {
        switch (errorCode) {
            case "auth/user-not-found": {
                setError("This user does not exist");
                break;
            }
            case "auth/wrong-password": {
                setError("The password you entered is incorrect");
                break;
            }
            case "auth/too-many-requests": {
                setError("This account has been temporarily disabled");
                break;
            }
            case "auth/multiple-users":
                setError("Multiple users have this username. Try using your email instead.");
                break;
            default: {
                console.log("Uncaught login error.");
            }
        }
    };

    const LogUserIn = async () => {
        // Tests if inputted value is email or password
        if (emailRegex.test(key)) {
            auth.signInWithEmailAndPassword(key, password).catch((error) => {
                handleError(error.code);
            });
        } else {
            // User inputted username
            const user = await db.collection("users").where("username", "==", key).get();

            if (user.empty) {
                handleError("auth/user-not-found");
                return;
            }
            if (user.size >= 2) {
                handleError("auth/multiple-users");
                return;
            }

            const userEmail = user.docs[0].data().email;
            if (!userEmail) handleError("auth/user-not-found");
            auth.signInWithEmailAndPassword(userEmail, password).catch((error) => {
                handleError(error.code);
            });
        }
    };

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

            {/* Error label */}
            <label className="error-label">{error}</label>

            {/* Sign in button */}
            <Button label="Sign in" className="button-primary button-sign-in" onClick={LogUserIn} />

            {/* Link to register form */}
            <Link to="/register">
                <Button label="Create an account" className="button-tertiary" />
            </Link>
        </div>
    );
};

export default Login;