import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import conoceUX from '../images/queEsux.png'
import conoceUX1 from '../images/Infografia-metodologia_dcu.jpg'
import { Row, Col } from 'react-bootstrap';
function launchTarjetaDCU() {
    return (
        <><><><><Card id="Tarjeta2">
                <Card.Header as="h5">Que es Diseño Centraod en el Usuario (DCU) </Card.Header>
                <Card.Img variant="top" src={conoceUX1} />
                <Card.Body>
                    <Card.Text>
                        Enfoque de diseño cuyo proceso se basa en:
                        información sobre las personas que van a hacer uso
                        del producto.
                    </Card.Text>
                    <Card.Header as="h5">PASOS</Card.Header>
                </Card.Body>
            </Card></></></><Row>
                 <Col>
                    <Card style={{ width: '18rem' }}>
                        
                        <Card.Body>
                            <Card.Title>1) Supuestos y Requerimientos</Card.Title>
                            <Card.Text>
                            Entrevista stakeholder; entrevista a futuros usuarios; conclusión primera arquitectura.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        
                        <Card.Body>
                            <Card.Title>2) Analisis Referencial o Benchmaking</Card.Title>
                            <Card.Text>
                            Analizar cómo resolvieron necesidades y aprender tanto de lo positivo, como de lo negativo, patrones similares y no herramientas similares.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        
                        <Card.Body>
                            <Card.Title>3) Analisis de Usuarios</Card.Title>
                            <Card.Text>
                            Usuarios prototípicos con una imagen, edad, algunas actividades personales y escenarios en los que ese usuario o grupo de ellos usa el sistema.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        
                        <Card.Body>
                            <Card.Title>4) Arquitectura a</Card.Title>
                            <Card.Text>
                            Los usuarios deben encontrar fácilmente lo que usan más a menudo (análisis de tráfico y pareto), deben encontrar las cosas con el nombre que prefieren en los grupos adecuados medio que permite la interacción de una persona con un sistema, en este caso con una página web o aplicación móvil.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        
                        <Card.Body>
                            <Card.Title>5) Card Sorting</Card.Title>
                            <Card.Text>
                            Si el usuario potencial le dice así a las funciones que estamos trabajando y si para ellos se agrupan en los escenarios y/o partes del menú que proponemos.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        
                        <Card.Body>
                            <Card.Title>6) Navegation Path</Card.Title>
                            <Card.Text>
                            Después de terminar el card sorting se rediseña la arquitectura con los hallazgos que se encontraron en él.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        
                        <Card.Body>
                            <Card.Title>7) Wireframes / Storyboards</Card.Title>
                            <Card.Text>
                            Diagramaciones, sin color ni detalle gráfico, en los que se experimentan por primera vez los escenarios. La parte más importante de los wireframes es el diseño de la jerarquía de los escenarios
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        
                        <Card.Body>
                            <Card.Title>8) Paper Prototyping</Card.Title>
                            <Card.Text>
                            Probar la navegación, la arquitectura alfa, los patrones de diseño y la jerarquía y secuencia de lectura de los elementos de la interface.

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        
                        <Card.Body>
                            <Card.Title>9) Arquitectura ß</Card.Title>
                            <Card.Text>
                            Después del paper prototyping y con sus correcciones, se define la arquitectura ß. Esta debe tener incorporadas todas las mejoras que se encontraron en estas etapas anteriores.

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        
                        <Card.Body>
                            <Card.Title>10) Look and Feel</Card.Title>
                            <Card.Text>
                            para este momento la jerarquía, estructura, nomenclatura y diagramación de la herramienta han sido ya definidas y validadas se define:
                            • moodboard
                            • tipografía
                            • cromática e
                            • iconografía
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        
                        <Card.Body>
                            <Card.Title>11) Mockup</Card.Title>
                            <Card.Text>
                            Maqueta funcional de la aplicación, se hace para hacer pruebas en las que sea posible probar el look & feel.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    
                        <Card.Body>
                            <Card.Title>12) Especificaciones</Card.Title>
                            <Card.Text>
                            Con las conclusiones de las pruebas desarrolladas a partir del mockup, se generan las últimas correcciones para tener una versión validada de la arquitectura ß.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>              
            </Row></>
    );
  }
  
  export default launchTarjetaDCU;