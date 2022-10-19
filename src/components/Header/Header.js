import { signOut } from 'firebase/auth';
import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../image/logo.png'
import './Header.css';



const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <div className='header'>
      <Navbar bg="primary" variant="dark" sticky='top'>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img height={40} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Nav className="justify-content-end">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/checkOut">Check Out</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/aboutMe">About Me</Nav.Link>
            {user ?<Button className='text-white text-decoration-none' onClick={handleSignOut} variant="link">Sign Out</Button> :
              <Nav.Link as={Link} to="/login">Login</Nav.Link>}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;