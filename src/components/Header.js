import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
        userToken === undefined || userToken === 'undefined'
          ? (
            <>
              <Link className="nav-link white" to="/login">SIGN IN</Link>
              <Link className="nav-link" to="/signup">
                <span className="btn-menu">SIGN UP</span>
              </Link>
            </>
          )
          : (
            <>
              <Link className="nav-link white" to="/suits">Suits</Link>
              <Link className="nav-link white" to="/appointments">Appointments</Link>
              <Link className="nav-link white" to="/logout">
                LOGOUT
              </Link>
            </>
          )
      }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
