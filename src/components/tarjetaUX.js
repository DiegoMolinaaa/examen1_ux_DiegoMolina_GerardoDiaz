import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import conoceUX from '../images/queEsux.png'
import conoceUX1 from '../images/Infografia-metodologia_dcu.jpg'
import planEstudio from '../images/planEstudioSistemas.png'
import { Row, Col } from 'react-bootstrap';
function launchTarjetaUX() {
    return (
        <div>
            <Card id="Tarjeta1">
                <Card.Header as="h5">Que es UX</Card.Header>
                <Card.Img variant="top" src={conoceUX} />
                <Card.Body>
                    <Card.Text>
                        Proceso de aumentar la satisfacción y lealtad del cliente
                        mediante la mejora de la usabilidad y facilidad de uso de
                        un producto. Se trata de una estrategia que tiene como objetivo entregar mejores experiencias a los usuarios de servicios y productos tanto digitales como físicos
                        
                    </Card.Text>
                </Card.Body>
            </Card>
            <br/>
            <br/>
            <Card id="Tarjeta1">
                <Card.Header as="h5">Requisitos de Clase</Card.Header>
                <Card.Img variant="top" src={planEstudio} />
                <Card.Body>
                    <Card.Text>
                        Experiencia de Usuario es una clase la cual se toma en su 3er año de la carrera de Ingeniería en Sistemas Computacionales.
                        La clase podra ser matriculada cuando Teoria de Bases de Datos 1 es aprobada.
                        
                    </Card.Text>
                </Card.Body>
            </Card>
            <br/>
            <br/>
            <br/>
        </div>
    );
  }
  
  export default launchTarjetaUX;