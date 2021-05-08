import React from "react";
import { Link } from "react-router-dom";

export default class End extends React.Component {
    render() {
        return (
            <div className="login-container">
                <h2>Unfortunately, this is the end of this demo! Stay tuned for the finished application.</h2>

                <Link to="/">
                    <button className="button-primary left">
                        <span>Go back</span>
                    </button>
                </Link>
            </div>
        );
    }
}