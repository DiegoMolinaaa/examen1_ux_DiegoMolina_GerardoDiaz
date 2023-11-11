import React from 'react'
import Carrusel from './carrusel'
import Tarjetas from './tarjetasInicio'
function launchInicio() {
  return (
    <div id="inicio">
        <section id="Carrusel_Inicio">
        <Carrusel />
        </section>
        <section id="Informacion_Inicio">
            <Tarjetas />
        </section>
        <section id="Footer">

        </section>
    </div>
  );
}

export default launchInicio;