import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './kk-logo.png';
import '../Navbar/Navbar.css'

function Navbar1() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary navcolor">
        <Container>
          <Navbar.Brand href="#home"><img src={Logo} className='logo' alt='logo'/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto tab">
              <Nav.Link className='tab1' href="#home" >Home</Nav.Link>
              <Nav.Link className='tab1' href="#link">About</Nav.Link>
              <Nav.Link className='tab1' href="#home" >Services</Nav.Link>
              <Nav.Link className='tab1' href="#link">Contact US</Nav.Link><Nav.Link className='tab1' href="#home" >Home</Nav.Link>
              <Nav.Link className='tab1' href="#link">Social Media</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  export default Navbar1;    