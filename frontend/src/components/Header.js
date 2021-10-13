import react from "react";

import {Navbar,Container,Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

export default function Header(){
    return(
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
  <Container>
    <LinkContainer to='/'>
        <Navbar.Brand href="#home">ProShop</Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <LinkContainer to='/cart'>
            <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/login'>
            <Nav.Link href="/login"><i className="fas fa-user"></i>sign in</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    );
}