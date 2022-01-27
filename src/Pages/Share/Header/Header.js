import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { logOut, user, name } = useAuth();

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand className="nav-logo" href="#home"><img src='....' alt="" /><span>Plan a Beautiful Tour</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto text-center">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/services">Products</Nav.Link>

                            {
                                user?.email &&
                                <Nav.Link as={Link} to='/myorder'>My Orders</Nav.Link>
                            }

                            {
                                user?.email &&
                                <Nav.Link as={Link} to='/manageallorder' >Manage All Orders</Nav.Link>
                            }

                            {
                                user?.email &&
                                <Nav.Link as={Link} to="/addservice" >Add A New Product</Nav.Link>
                            }

                            {
                                user?.email &&
                                <Nav.Link as={Link} ><h4>{user.displayName || name}</h4></Nav.Link>

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