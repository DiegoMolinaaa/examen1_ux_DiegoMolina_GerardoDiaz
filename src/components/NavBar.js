import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoSistemas from "../images/logoSistemas.jpeg"

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand href="/">
            <img
              src={logoSistemas}
              className="d-inline-block align-top"
              width="50"
              height="50"
              alt="Logo Ingenieria en Sistemas Computacionales"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <NavDropdown title="¿Eres Estudiante?" id="basic-nav-dropdown-estudiante">
              <NavDropdown.Item href="#action/3.3">
                ¿Que es la Experiencia del Usuario?
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.1">¿Que es el DCU?</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="¿Eres un Padre de Familia?" id="basic-nav-dropdown-padre">
              <NavDropdown.Item href="#action/3.1">Informate</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;