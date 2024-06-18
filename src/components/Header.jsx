import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button,  } from 'react-bootstrap';
import LogoPNG from "../img/mainLogoPNG.png"

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" >
          <div className='d-flex align-items-center '>
            <img src={LogoPNG} className='' style={{width:"5rem"}} alt='Site Logo'/>
          </div>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Form className="d-flex  overflow-hidden w-100">
            <FormControl
              type="search"
              placeholder="Cerca un prodotto"
              className="me-2 border border-dark border-3 rounded rounded-pill"
              aria-label="Search"
            />
          </Form>
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#articles">Articles</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#cart" className='pt-1'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-minecart" viewBox="0 0 16 16" className=''>
  <path d="M4 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4m8-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4M.115 3.18A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 14 12H2a.5.5 0 0 1-.491-.408l-1.5-8a.5.5 0 0 1 .106-.411zm.987.82 1.313 7h11.17l1.313-7z"/>
</svg></Nav.Link>

            <Nav.Link href="#about"><Button className='btn-dark'>LogIn</Button></Nav.Link>

            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
