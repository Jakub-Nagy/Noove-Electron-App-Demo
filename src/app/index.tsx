// React dependencies
import { render } from 'react-dom';
import { HashRouter, Route, Switch } from "react-router-dom";

// Styling and assets
import '../css/index.css';
import Symbol from '../assets/noove-symbol.svg';

// Firebase and state management
import "./utility/Firebase";
import { Firebase } from "./utility/User";
import { RecoilRoot } from "recoil";

// Views
import Login from './views/Login';
import Register from './views/Register';
import End from './views/End';

render(
    <RecoilRoot>
        {/* Noove symbol */}
        <img src={Symbol} className="symbol" alt="Noove Symbol" />

        <HashRouter>
            <Firebase loading={<h1>Loading...</h1>}>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/Register" exact component={Register} />
                    <Route path="/end" component={End} />
                </Switch>
            </Firebase>
        </HashRouter>
    </RecoilRoot>,
    document.getElementById('view-layout')
);