import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const navigation = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand='lg' variant='light' style={{backgroundColor: '#f5f5f500'}}>
        <Container>
          <Navbar.Brand href='#'>Jadoo</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mx-auto'>
              <Nav.Link style={{ paddingRight: '10%' }}>Destinations</Nav.Link>
              <Nav.Link style={{ paddingRight: '10%' }}>Hotels</Nav.Link>
              <Nav.Link style={{ paddingRight: '10%' }}>Flights</Nav.Link>
              <Nav.Link>Bookings</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>Login</Nav.Link>
              <Nav.Link>Sign Up</Nav.Link>
              <NavDropdown title='EN' id='collasible-nav-dropdown'>
                <NavDropdown.Item>HI</NavDropdown.Item>
                <NavDropdown.Item>FR</NavDropdown.Item>
                <NavDropdown.Item>EN</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default navigation;
