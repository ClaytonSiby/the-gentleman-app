import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import RouteGenerator from './containers/RouteGenerator';
import styles from './assets/scss/app.module.scss';

const history = createBrowserHistory();

const App = () => (
  <Container fluid className={`${styles.app}`}>
    <BrowserRouter history={history}>
      <Header />
      <RouteGenerator />
      <Footer />
    </BrowserRouter>
  </Container>
);

export default App;
