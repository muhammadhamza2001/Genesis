import React from 'react';
import { Navbar, Nav, NavDropdown, Container, FormControl, Button, Form } from 'react-bootstrap';
import "./Navbar.css"
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaSearch } from 'react-icons/fa';
const AppNavbar = () => {
  return (
    <Navbar bg="dark" expand="lg" className='navbg' >
      <Container id='topp'>
        <Navbar.Brand href="#" className='logonav'>
          <img src="https://www.genesis.com/etc.clientlibs/genesis-p2/global/clientlibs/clientlib-basepage/resources/images/logo.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto ">
            <Nav.Link href="#model" className='linkssnav' active>MODELS</Nav.Link>
            <Nav.Link href="#" className='linkssnav'>MEMEBERS</Nav.Link>
            
            <Nav.Link href="#" className='linkssnav'>GENESIS</Nav.Link>
          </Nav>
          <Form className="d-flex">
          <Nav.Link href="#" className='linkssnav'>SUPPORT</Nav.Link>
          <FaSearch className='search' style={{ color: '#ffffff' }} />
          </Form>
         
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
