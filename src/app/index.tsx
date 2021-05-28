// React dependencies
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from "react-router-dom";

// Styling
import '../css/index.css';

// Images
import Symbol from '../assets/noove-symbol.svg';

// Firebase
import "./utility/Firebase";

// Views
import Login from './views/Login';
// import Register from './views/Register';
import End from './views/End';

ReactDOM.render(
    <HashRouter>
        <Fragment>
            {/* Noove symbol */}
            <img src={Symbol} className="symbol" alt="Noove Symbol" />
            
            <Switch>
                <Route exact path="/" component={Login} />
                {/* <Route path="/Register" exact component={Register} /> */}
                <Route path="/end" component={End} />
            </Switch>
        </Fragment>
    </HashRouter>,
    document.getElementById('view-layout')
);