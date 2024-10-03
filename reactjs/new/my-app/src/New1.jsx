import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const New1 = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#features">ABOUT</Nav.Link>
            <Nav.Link href="#pricing">CONTACT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default New1
