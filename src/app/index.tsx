// React dependencies
import { Fragment } from 'react';
import { render } from 'react-dom';
// import { HashRouter, Route, Switch } from "react-router-dom";

// Styling and assets
import '../css/index.css';
import Symbol from '../assets/noove-symbol.svg';

// Firebase and state management
import "./utility/Firebase";
// import { Firebase } from "./utility/User";

// Views
// import Login from './views/Login';
// import Register from './views/Register';
// import End from './views/End';

// import App from './state/Counter';

import ConnectedUserComponent from './state/Counter2'
// import counter from './state/Reducer'

import { Provider } from 'react-redux';
import store from 'react-redux';

render(
    <Fragment>
        {/* Noove symbol */}
        <img src={Symbol} className="symbol" alt="Noove Symbol" />

        {/* <HashRouter>
            <Firebase loading={<h1>Loading...</h1>}>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/Register" exact component={Register} />
                    <Route path="/end" component={End} />
                </Switch>
            </Firebase>
        </HashRouter> */}

        <Provider store={store}>

            <ConnectedUserComponent />

        </Provider>

        {/* <App /> */}

    </Fragment>,
    document.getElementById('view-layout')
);