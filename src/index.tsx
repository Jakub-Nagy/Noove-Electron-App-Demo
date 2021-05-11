// React dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import * as serviceWorker from './ts/utility/serviceWorker';

// Styling
import './css/index.css';

// Views
import Login from './ts/views/Login';
import Sign_up_1 from './ts/views/Sign_up_1';
import Sign_up_2 from './ts/views/Sign_up_2';
import Sign_up_3 from './ts/views/Sign_up_3';
import Sign_up_4 from './ts/views/Sign_up_4';
import End from './ts/views/End';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            {/* Noove symbol */}
            <img src={require('./assets/noove-symbol.svg')} className="symbol" />

            <div className="App">
                <Route path="/" exact component={Login} />
                <Route path="/Sign_up_1" exact component={Sign_up_1} />
                <Route path="/Sign_up_2" exact component={Sign_up_2} />
                <Route path="/Sign_up_3" exact component={Sign_up_3} />
                <Route path="/Sign_up_4" exact component={Sign_up_4} />
                <Route path="/End" exact component={End} />
            </div>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('view-layout')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();