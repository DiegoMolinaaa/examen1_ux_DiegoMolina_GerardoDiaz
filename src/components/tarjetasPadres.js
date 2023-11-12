import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import conoceUX from '../images/queEsux.png'
import conoceUX1 from '../images/Infografia-metodologia_dcu.jpg'
import { Row, Col } from 'react-bootstrap';
function launchTarjetaUX() {
    return (
        <div>
            <Card id="Tarjeta1">
                <Card.Header as="h5">Que es UX</Card.Header>
                <Card.Img variant="top" src={conoceUX} />
                <Card.Body>
                    <Card.Text>
                    La experiencia de usuario, en el contexto de la educación digital del estudiante, se trata de cómo se interactúa con las tecnologías y plataformas que se utilizan para aprender. 
                    Un buen diseño de experiencia de usuario implica que las herramientas digitales sean amigables, seguras y efectivas en el proceso educativo. 
                    Como institución, nos queremos asegurar que su hijo pueda navegar fácilmente por las aplicaciones o plataformas, acceder a recursos educativos de manera clara y, en general, sentirse cómodo y motivado al utilizar la tecnología en su aprendizaje.
                    Al entender cómo se centra en la experiencia de usuario en el aula digital, se puede evaluar mejor cómo la tecnología contribuye al desarrollo académico y bienestar general del estudiante.
                        
                    </Card.Text>
                </Card.Body>
            </Card>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
  }
  
  export default launchTarjetaUX;