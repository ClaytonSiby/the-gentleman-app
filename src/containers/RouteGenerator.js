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
    <Route path="/suits" component={Suits} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
    <Route path="/appointments" component={Appointments} />
    <Route
      path="/logout"
      render={() => {
        localStorage.setItem('userToken', undefined);
        window.location.href = '/login';
      }}
    />
  </Switch>
);

export default RouteGenerator;
