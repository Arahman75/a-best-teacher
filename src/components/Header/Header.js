import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.png'
import './Header.css';


const Header = () => {
    return (
        <div className='header'>
            <Navbar bg="primary" variant="dark" sticky='top'>
        <Container>
        <Navbar.Brand as={Link} to="/">
                        <img height={40} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="justify-content-end">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/checkOut">Check Out</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/aboutMe">About Me</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
        </div>
    );
};

export default Header;