// React dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";

// Styling
import '../css/index.css';

// Images
import Symbol from '../assets/noove-symbol.svg';

// Firebase
import "./utility/Firebase";

// Views
import Login from './views/Login';
import Register from './views/Register';
import End from './views/End';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            {/* Noove symbol */}
            <img src={Symbol} className="symbol" alt="Noove Symbol" />
      
            <Route path="/" exact component={Login} />
            <Route path="/Register" exact component={Register} />
            <Route path="/End" exact component={End} />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('view-layout')
);