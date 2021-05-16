import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Suits from '../components/Suits';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Appointments from '../pages/Appointments';

const RouteGenerator = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/suits" component={Suits} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/appointments" component={Appointments} />
    <Route
      exact
      path="/logout"
      render={() => {
        localStorage.getItem('userToken', undefined);
        window.location.href = '/login';
      }}
    />
  </Switch>
);

export default RouteGenerator;
