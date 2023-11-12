import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import conoceUX from '../images/tarjetaClaseUX.png'
function launchTarjetasInicio() {
    return (
        <Card id="Tarjeta1">
        <Card.Header as="h5">Sobre Esta Clase</Card.Header>
        <Card.Img variant="top" src={conoceUX} />
        <Card.Body>
          <Card.Text>
           La clase de Experiencia de Usuario se enfoca en explorar y comprender cómo los usuarios interactúan con productos y servicios digitales, y cómo diseñar soluciones que satisfagan sus necesidades y expectativas.
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
  
  export default launchTarjetasInicio;