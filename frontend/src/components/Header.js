import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand >ShopShop.in</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav class="ms-auto d-flex flex-row">

              <LinkContainer to='/cart'> 
              <Nav.Link className="px-2" >
                <i className="fas fa-shopping-cart"></i>
                Cart
              </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/login">
              <Nav.Link className="" >
                <i className="fas fa-user"> </i>
                Sign In
              </Nav.Link>
              </LinkContainer>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;