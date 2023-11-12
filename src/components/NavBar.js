import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoSistemas from "../images/logoSistemas.jpeg"

import { handleClick } from './funciones'; 
import { handleClick2 } from './funciones';
import { handleClick3 } from './funciones';
import { handleClick4 } from './funciones';
import './NavBar.css';

function NavBar({ setPaginaActual }) {
  const handleNavClick = () => {
    handleClick(setPaginaActual);
  };
  const handleNavClick2 = () => {
    handleClick2(setPaginaActual);
  };
  const handleNavClick3 = () => {
    handleClick3(setPaginaActual);
  };
  const handleNavClick4 = () => {
    handleClick4(setPaginaActual);
  };
  
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
            <Nav.Link href="#home"><button onClick={handleNavClick2}>Inicio</button></Nav.Link>
            <NavDropdown title="¿Eres Estudiante?" id="basic-nav-dropdown-estudiante">
              <NavDropdown.Item href="#action/3.3">
              <button onClick={handleNavClick3}>¿Que es la Experiencia de Usuario?</button>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.1">
                <button onClick={handleNavClick4}>¿Que es DCU?</button>
                </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="¿Eres un Padre de Familia?" id="basic-nav-dropdown-padre">
              <NavDropdown.Item 
              href="#action/3.1">
              <button onClick={handleNavClick}>Informate</button>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;