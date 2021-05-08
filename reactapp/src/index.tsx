import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CypressHistorySupport } from 'cypress-react-router';
import { Provider } from 'react-redux';
import './i18n/config';
import 'slick-react-ui-components/index.css';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { routes, loggedRoutes, RouteItem } from './routes';
import { Main } from './components/Main';
import store from './store';

interface USER {
    name: string;
    role: string;
}
const user: USER = {
    name: '',
    role: '',
};

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <CypressHistorySupport />
                <Switch>
                    {routes &&
                        routes.length > 0 &&
                        routes.map((route: RouteItem, index: number) => {
                            const { path, component } = route;
                            return (
                                <Route key={`route-${index}`} exact path={path}>
                                    {component}
                                </Route>
                            );
                        })}
                    <Main user={user}>
                        <>
                            {loggedRoutes &&
                                loggedRoutes.length > 0 &&
                                loggedRoutes.map(
                                    (route: RouteItem, index: number) => {
                                        const { path, component } = route;
                                        return (
                                            <Route
                                                key={`logged-route-${index}`}
                                                exact
                                                path={path}
                                            >
                                                {component}
                                            </Route>
                                        );
                                    }
                                )}
                        </>
                    </Main>
                </Switch>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
