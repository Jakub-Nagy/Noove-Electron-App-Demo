import React from "react";
import { Link } from "react-router-dom";

export default class End extends React.Component {
    render() {
        return (
            <div className="form-container" id="end">
                <h2>Unfortunately, this is the end of this demo! Stay tuned for the finished application.</h2>

                <Link to="/" id="button-end">
                    <button className="button-primary">
                        <label>Go to start</label>
                    </button>
                </Link>
            </div>
        );
    }
}