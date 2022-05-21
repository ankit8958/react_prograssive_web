import React from 'react';
import {Nav,Navbar,Container} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
const NavBar = () => {
  return (
    <div>
        
     <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/about">About</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/users">Users</NavLink></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default NavBar
