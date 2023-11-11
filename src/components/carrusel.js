import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import BienvenidaCarrusel from '../images/bienvenidaCarrusel.jpg'
import uxCarrusel from '../images/uxCarrusel.jpg'
import dcuCarrusel from '../images/dcuCarrusel.jpg'
function carruselInicial() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={BienvenidaCarrusel}
            style={{ width: '250px', height: '650px' }}
            className="d-block w-100 c-img"
            alt='Bienvenida'
        />
        <Carousel.Caption>
          <h3>Bienvenidos</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={uxCarrusel}
            style={{ width: '250px', height: '650px' }}
            className="d-block w-100 c-img"
            alt='UX Carrusel'
        />
        <Carousel.Caption>
          <h3>Aprende sobre UX</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={dcuCarrusel}
            style={{ width: '250px', height: '650px' }}
            className="d-block w-100 c-img"
            alt='DCU Carrusel'
        />
        <Carousel.Caption>
          <h3>Conoce el DCU</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default carruselInicial;