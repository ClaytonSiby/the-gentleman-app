import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => (
    <Navbar sticky="top" collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='/appointments'>Appointments</Nav.Link>
        </Nav>
        <Nav className="mr-auto">
          <Nav.Link href='/login'>Login</Nav.Link>
          <Nav.Link eventKey={2} href='/signup'>
            SignUp
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
)

export default Header
