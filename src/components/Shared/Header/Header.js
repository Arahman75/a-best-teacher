import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../image/logo.png';
import './Header.css';



const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }
  return (
//responsive navbar
<div className='header'>
<Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky='top'>
      <Container>
        <Navbar.Brand as={Link} to="/">
        <img height={40} src={logo} alt="" />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
            {/* <Nav.Link as={Link} to="home#show-service">Service</Nav.Link> */}
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <Nav.Link as={Link} to="/checkOut">Check Out</Nav.Link>
          <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
          <Nav.Link as={Link} to="/aboutMe">About Me</Nav.Link>

         

          {user ?<Button className='text-white text-decoration-none' onClick={handleSignOut} variant="link">Sign Out</Button> :
               <Nav.Link as={Link} to="/login">Login</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* // <div className='header'>
    //   <Navbar bg="primary" variant="dark" sticky='top'>
    //     <Container>
    //       <Navbar.Brand as={Link} to="/">
    //         <img height={40} src={logo} alt="" />
    //       </Navbar.Brand>
    //       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //       <Nav className="justify-content-end">
    //         <Nav.Link as={Link} to="/home">Home</Nav.Link>
    //         <Nav.Link as={Link} to="/checkOut">Check Out</Nav.Link>
    //         <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
    //         <Nav.Link as={Link} to="/aboutMe">About Me</Nav.Link>
    //         {user ?<Button className='text-white text-decoration-none' onClick={handleSignOut} variant="link">Sign Out</Button> : */}
    {/* //           <Nav.Link as={Link} to="/login">Login</Nav.Link>}
    //       </Nav> */}
    {/* </Container>
     </Navbar> */}
    </div>
  );
};

export default Header;