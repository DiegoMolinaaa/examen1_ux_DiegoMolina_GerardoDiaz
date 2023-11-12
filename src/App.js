import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Inicio from './components/Inicio'
import Footer from './components/footer'
import React, { useState } from 'react';
import { handleClick } from './components/funciones';
import Tarjetas from './components/tarjetaUX';
import Tarjetas1 from './components/tarjetaDCU';
import Tarjetas2 from './components/tarjetasPadres';


function App() {
  const [paginaActual, setPaginaActual] = useState('home');
  return (
    <div className="App">
      
      <NavBar setPaginaActual={setPaginaActual}/>

      {paginaActual === 'home' && (
        <div>
          <Inicio/>
        </div>
      )}
      {paginaActual === 'DCU' && (
        <div>
          <Tarjetas1 />
        </div>
      )}
      {paginaActual === 'UX' && (
        <div>
          <Tarjetas />
        </div>
      )}
      {paginaActual === 'Informate' && (
        <div>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <Tarjetas2 />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
