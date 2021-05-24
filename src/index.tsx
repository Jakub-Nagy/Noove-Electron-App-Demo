// React dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import * as serviceWorker from './ts/utility/serviceWorker';
import { RecoilRoot } from 'recoil';

// Styling
import './css/index.css';

// Firebase
import "./ts/utility/Firebase";

// Views
import Login from './ts/views/Login';
import Register from './ts/views/Register';
import End from './ts/views/End';

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <BrowserRouter>
                {/* Noove symbol */}
                <img src={require('./assets/noove-symbol.svg')} className="symbol" alt="Noove Symbol" />

                <Route path="/" exact component={Login} />
                <Route path="/Register" exact component={Register} />
                <Route path="/End" exact component={End} />
            </BrowserRouter>
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('view-layout')
);

serviceWorker.unregister();