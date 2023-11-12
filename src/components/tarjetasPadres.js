import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import conoceUX from '../images/queEsux.png'
import uxYDcu from '../images/dcuYUx.png'
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
            <Card id="Tarjeta2">
                <Card.Header as="h5">Como el DCU y el UX Se Conectan</Card.Header>
                <Card.Img variant="top" src={uxYDcu} />
                <Card.Body>
                    <Card.Text>
                    <b>Experiencia de Usuario (UX):</b><br/>

            La UX se refiere al conjunto completo de interacciones que una persona tiene con un producto o servicio, y cómo se siente acerca de esas interacciones.
            Incluye aspectos emocionales, perceptuales y conductuales de la interacción del usuario con el producto.
            Se preocupa por la impresión general y la satisfacción del usuario al utilizar el producto.
            La UX abarca aspectos más amplios, como la usabilidad, el diseño visual, la accesibilidad y la arquitectura de la información.
            <br/>
            <b>Diseño Centrado en el Usuario:</b><br/> 
            es un enfoque metodológico que coloca al usuario en el centro del proceso de diseño y desarrollo.
            Implica entender las necesidades, deseos y limitaciones de los usuarios a lo largo de todo el ciclo de vida del diseño.
            Incluye la investigación y la recopilación de datos sobre los usuarios para informar las decisiones de diseño.
            Se centra en la creación de soluciones que resuelvan los problemas reales de los usuarios y mejoren su experiencia.
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