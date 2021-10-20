import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css';
import logo from '../../../Images/logo-hospital.jpg';

const Header = () => {
    const { logOut, user, name } = useAuth();
  return (

    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="nav-logo" href="#home"><img src={logo} alt="" /><span>Health Care Hospital</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/services">Services</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contacts">Contacts</Nav.Link>


              <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>



              {user?.email &&
                <h1>{user.displayName || name}</h1>
              }

              {
                user?.email ?

                  < Nav.Link as={Link} className='header-button' to='/' onClick={logOut}><Button variant="dark">Log Out</Button></Nav.Link>
                  :
                  <Nav.Link as={Link} className='header-button' to="/login"><Button variant="dark">Log In</Button></Nav.Link>
              }


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>


  );
};

export default Header;