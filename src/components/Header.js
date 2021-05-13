import React from 'react'
import PropTypes from 'prop-types'
import { Navbar, Nav } from 'react-bootstrap'
import { connect } from 'react-redux'
import logo from '../assets/images/logo.PNG'
import styles from '../assets/scss/header.module.scss'

const Header = ({ loggedIn }) => (
  <Navbar
    sticky='top'
    className={`px-2 ${styles.theNavbar}`}
    collapseOnSelect
    expand='lg'
    bg='white'
    variant='light'
  >
    <div>
      <Navbar.Brand href='#home'>
        <img src={logo} alt='logo' />
      </Navbar.Brand>
    </div>
    <div>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        {loggedIn ? (
          <Nav className='mr-auto'>
            <Nav.Link href='/appointments'>Appointments</Nav.Link>
            <Nav.Link href='/signout'>Logout</Nav.Link>
          </Nav>
        ) : (
          <Nav className='mr-auto'>
            <Nav.Link href='/appointments'>Appointments</Nav.Link>
            <Nav.Link href='/login'>Login</Nav.Link>
            <Nav.Link eventKey={2} href='/signup'>
              SignUp
            </Nav.Link>
          </Nav>
        )}
      </Navbar.Collapse>
    </div>
  </Navbar>
)

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired
}

const mapStateToProps = state => {
  return {
    loggedIn: state.signup.loggedIn
  }
}

export default connect(mapStateToProps)(Header)
