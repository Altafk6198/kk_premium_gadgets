import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './kk-logo.png';
import '../Navbar/Navbar.css'

function Navbar1() {
  return (
      <Navbar expand="lg" className="bg-body-tertiary navcolor main">
      <Container >
        <section className='navlogo'>
          <Navbar.Brand href="#home"><img src={Logo} className='logo' alt='logo' /></Navbar.Brand>
        </section>
        <section className='tab'>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className='tab1' href="#home" >Home</Nav.Link>
              <Nav.Link className='tab1' href="#link">About</Nav.Link>
              <Nav.Link className='tab1' href="#home" >Services</Nav.Link>
              <Nav.Link className='tab1' href="#link">Contact</Nav.Link>
              <Nav.Link className='tab1' href="#home" >Products</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </section>
        <section className='search'>
          <div class="input-group">
            <div class="form-outline" className='sbox' data-mdb-input-init>
              <input type="search" id="form1" class="form-control" placeholder='Search' />
            </div>
            <button type="button" class="btn btn-primary sbtn1" data-mdb-ripple-init>
              <i>Search</i>
            </button>
          </div>
        </section>
      </Container>
    </Navbar>
  );
}
export default Navbar1;    