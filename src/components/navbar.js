import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '.././assets/icons/kp.webp'
const navbar =()=>{

return (
<div>
<Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home"><img src={Logo} alt="logo" style={{height:'60px'}}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#skills">Skills</Nav.Link>
     
      <Nav.Link href="https://github.com/Kaushik1DEV">Projects</Nav.Link>
      <Nav.Link eventKey={2} href="#contact">
        Contacts
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  </div>  


)

}

export default navbar;