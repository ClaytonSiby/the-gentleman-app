import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Container } from 'react-bootstrap';
import Homepage from './pages/Homepage';
import Appointments from './pages/Appointments';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Suits from './components/Suits';
import HomepageLayout from './Layouts/HomepageLayout';
import MainLayout from './Layouts/MainLayout';
import styles from './assets/scss/app.module.scss';

const history = createBrowserHistory();

const App = () => (
  <Container fluid className={`${styles.app}`}>
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )}
        />

        <Route
          exact
          path="/signup"
          render={() => (
            <MainLayout>
              <SignUp />
            </MainLayout>
          )}
        />

        <Route
          exact
          path="/login"
          render={() => (
            <MainLayout>
              <Login />
            </MainLayout>
          )}
        />

        <Route
          exact
          path="/suits"
          render={() => (
            <MainLayout>
              <Suits />
            </MainLayout>
          )}
        />

        <Route
          exact
          path="/appointments"
          render={() => (
            <MainLayout>
              <Appointments />
            </MainLayout>
          )}
        />

        <Route
          exact
          path="/logout"
          render={() => {
            window.location.reload();
            localStorage.setItem('userToken', undefined);
            window.location.href = '/login';
          }}
        />
      </Switch>
    </Router>
  </Container>
);

export default App;
