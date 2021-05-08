import React from "react";
import { Link } from "react-router-dom";

export default class Sign_up_1 extends React.Component {
  render() {
    return (
      <div>
        <h1>This is my profile</h1>
        <Link to="/">Go back to home</Link>
        <div>
          <img src="https://sites.google.com/site/mate02trucha/_/rsrc/1472875957853/config/google_.jpg" alt="hello"></img> 
        </div>
      </div>
    );
  }
}