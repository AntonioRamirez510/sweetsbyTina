import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Header.css'
import logo from '/SweetsbyTina-logo.PNG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <Navbar className="custom-navbar"expand="sm" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img className="sweets-logo" src={logo}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" variant="light">
          <Nav className="ms-auto align-items-center">
            <LinkContainer to="/">
              <Nav.Link>HOME</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/gallery">
              <Nav.Link>GALLERY</Nav.Link>
            </LinkContainer>
            <Nav.Link href="tel:+1234567890">
              <Button className="custom-button">REQUEST <br></br> A QUOTE</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
