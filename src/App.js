import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Container } from 'react-bootstrap'
import Homepage from './pages/Homepage'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Suits from './components/Suits'
import HomepageLayout from './Layouts/HomepageLayout'
import MainLayout from './Layouts/MainLayout'
import styles from './assets/scss/app.module.scss'

const history = createBrowserHistory()

const App = () => (
  <Container className={`${styles.app}`}>
    <Router history={history}>
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )}
        />

        <Route
          path='/signup'
          render={() => (
            <MainLayout>
              <SignUp />
            </MainLayout>
          )}
        />

        <Route
          path='/login'
          render={() => (
            <MainLayout>
              <Login />
            </MainLayout>
          )}
        />

        <Route
          path='/suits'
          render={() => (
            <MainLayout>
              <Suits />
            </MainLayout>
          )}
        />
      </Switch>
    </Router>
  </Container>
)

export default App
