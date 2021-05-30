// React dependencies
import { render } from 'react-dom';
import { HashRouter, Switch, Redirect } from "react-router-dom";

// Styling and assets
import '../css/index.css';
import Symbol from '../assets/noove-symbol.svg';

// Firebase and state management
import "./utility/FirebaseConfiguration";
import { RecoilRoot, useRecoilState } from "recoil";
import { UserManager, UIDstate } from './utility/UserManager';

// Views
import Login from './views/Login';
import Register from './views/Register';
import App from './views/App';


// Routes definition
const ProtectedRoute = (props: { path: string; component: any }) => {
    const [UID] = useRecoilState(UIDstate);
  
    if (UID) {
        return <props.component />;
    } else return <Redirect to="/login" />;
};
  
const UnauthRoute = (props: { path: string; component: any }) => {
    const [UID] = useRecoilState(UIDstate);
  
    if (UID) {
        return <Redirect to="/" />;
    } else return <props.component />;
};

render(
    <RecoilRoot>
        {/* Noove symbol */}
        <img src={Symbol} className="symbol" alt="Noove Symbol" />

        <UserManager>
            <HashRouter>
                <Switch>
                    <ProtectedRoute path="/" component={App}></ProtectedRoute>
                    <UnauthRoute path="/login" component={Login}></UnauthRoute>
                    <UnauthRoute path="/register" component={Register}></UnauthRoute>
                </Switch>
            </HashRouter>
        </UserManager>
    </RecoilRoot>,
    document.getElementById('view-layout')
);