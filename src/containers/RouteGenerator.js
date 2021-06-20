import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Suits from '../components/Suits';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import SuitItem from '../pages/SuitItem';
import Appointments from '../pages/Appointments';

const RouteGenerator = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <PrivateRoute exact path="/suits" component={Suits} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={SignUp} />
    <PrivateRoute exact path="/appointments" component={Appointments} />
    <PrivateRoute exact path="/suits/:id" component={SuitItem} />
    <Route
      path="/logout"
      render={() => {
        localStorage.setItem('userToken', undefined);
        window.location.href = '/login';
      }}
    />
  </Switch>
);

/* eslint-disable react/jsx-props-no-spreading */
const PrivateRoute = ({ component: Component, ...rest }) => {
  const userToken = localStorage.getItem('userToken');
  return (
    <Route
      {...rest}
      render={(props) => (userToken === undefined || userToken === 'undefined' || userToken === '' || userToken === null ? (
        <Redirect
          to={{
            pathname: '/login',
          }}
        />

      ) : (
        <Component {...props} />
      ))}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default RouteGenerator;
