import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">ShopShop.in</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarSupportedContent">
              <Nav class="ms-auto flex">
                <Nav.Link className="px-2" href="/cart">
                    <i className="fas fa-shopping-cart"></i>
                  Cart
                </Nav.Link>
                <Nav.Link className="fas fa-user" href="/login px-2" >
                    Sign In
             
                </Nav.Link>
              </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
