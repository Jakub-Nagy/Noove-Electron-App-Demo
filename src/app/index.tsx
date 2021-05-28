// React dependencies
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from "react-router-dom";

// Styling and assets
import '../css/index.css';
import Symbol from '../assets/noove-symbol.svg';

// Firebase and state management
import "./utility/Firebase";
import { RecoilRoot } from "recoil";
import { Firebase } from "./utility/User";

// Views
import Login from './views/Login';
// import Register from './views/Register';
import End from './views/End';

ReactDOM.render(
    <Fragment>
        {/* Noove symbol */}
        <img src={Symbol} className="symbol" alt="Noove Symbol" />

        {/* <RecoilRoot> */}
            <HashRouter>
                {/* <Firebase loading={<h1>Loading...</h1>}> */}
                    <Switch>
                        <Route exact path="/" component={Login} />
                        {/* <Route path="/Register" exact component={Register} /> */}
                        <Route path="/end" component={End} />
                    </Switch>
                {/* </Firebase> */}
            </HashRouter>
        {/* </RecoilRoot> */}
    </Fragment>,
    document.getElementById('view-layout')
);