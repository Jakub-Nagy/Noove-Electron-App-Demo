// React dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";

// Styling
import '../css/index.css';

// Firebase
import "./utility/Firebase";

// Views
import Login from './views/Login';
// import Register from './ts/views/Register';
import End from './views/End';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            {/* Noove symbol */}
            <img src={require('../assets/noove-symbol.svg')} className="symbol" alt="Noove Symbol" />

            <Route path="/" exact component={Login} />
            {/* <Route path="/Register" exact component={Register} /> */}
            <Route path="/End" exact component={End} />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('app')
);