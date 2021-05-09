import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SignUp from './pages/SignUp';
import HomepageLayout from './Layouts/HomepageLayout'
import MainLayout from './Layouts/MainLayout';
import styles from './assets/scss/app.module.scss'

const App = () => (
  <div className={`${styles.app}`}>
    <Switch>
      <Route exact path="/" render={() => (
        <HomepageLayout>
          <Homepage />
        </HomepageLayout>
      )}/>

      <Route path="/signup" render={ () => (
        <MainLayout>
          <SignUp />
        </MainLayout>
      ) }/>
    </Switch>
  </div>
)

export default App
