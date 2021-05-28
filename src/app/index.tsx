// React dependencies
import { render } from 'react-dom';
import { HashRouter, Route, Switch } from "react-router-dom";

// Styling and assets
import '../css/index.css';
import Symbol from '../assets/noove-symbol.svg';

// Firebase and state management
import "./utility/FirebaseConfiguration";
import { RecoilRoot } from "recoil";
import { UserManager } from './utility/UserManager';

// Views
import Login from './views/Login';
import Register from './views/Register';
import End from './views/End';
import App from './views/App';

render(
    <RecoilRoot>
        {/* Noove symbol */}
        <img src={Symbol} className="symbol" alt="Noove Symbol" />

        <HashRouter>
            <UserManager>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/end" component={End} />
                </Switch>
            </UserManager>
        </HashRouter>
    </RecoilRoot>,
    document.getElementById('view-layout')
);