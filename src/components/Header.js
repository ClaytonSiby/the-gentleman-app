import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import logo from '../assets/images/logo.PNG';
import { Link } from 'react-router-dom';
import styles from '../assets/scss/header.module.scss';

const Header = ({ loggedIn }) => (
  <Navbar collapseOnSelect expand="sm">
  <Navbar.Brand href="/"><img className="logo" src={logo} alt="Car Rentals" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto" />
    <Nav className="d-flex justify-content-end">
      {
        !(loggedIn)
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

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  loggedIn: state.signup.loggedIn,
});

export default connect(mapStateToProps)(Header);
