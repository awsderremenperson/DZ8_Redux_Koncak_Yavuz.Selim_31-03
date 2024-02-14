
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './LoginPage';
import CreateTodoPage from './CreateTodoPage';
import { useSelector } from 'react-redux';

// PrivateRoute компонент для защищенных маршрутов
const PrivateRoute = ({ component: Component, ...rest }) => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    return (
        <Route
            {...rest}
            render={props => isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />}
        />
    );
};

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={LoginPage} />
                <PrivateRoute exact path="/create-todo" component={CreateTodoPage} />
                {/* Другие маршруты */}
                <Redirect to="/login" />
            </Switch>
        </Router>
    );
};

export default Routes;
