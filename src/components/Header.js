import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/images/logo.PNG';
import styles from '../assets/scss/header.module.scss';

const Header = () => {
  const userToken = localStorage.getItem('userToken');
  return (
    <Navbar collapseOnSelect expand="sm" className={`${styles.theNavbar}`}>
      <Navbar.Brand href="/"><img className="logo" src={logo} alt="Car Rentals" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" />
        <Nav className="d-flex justify-content-end">
          {
        userToken === undefined || userToken === 'undefined' || userToken === '' || userToken === null
          ? (
            <>
              <a className="nav-link white" href="/">Home</a>
              <a className="nav-link white" href="/login">LOGIN</a>
              <a className="nav-link" href="/signup">
                SIGNUP
              </a>
            </>
          )
          : (
            <>
              <a className="nav-link white" href="/">Home</a>
              <a className="nav-link white" href="/suits">Suits</a>
              <a className="nav-link white" href="/appointments">Appointments</a>
              <a className="nav-link white" href="/logout">
                LOGOUT
              </a>
            </>
          )
      }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
