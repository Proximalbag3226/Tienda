import React from 'react';
import {Header} from "./Componentes/header";
import {Productos} from './Componentes/productos';
import 'boxicons';

function App() {
  return (
    <div className="App">
      <div className='cabeza'>
        <Header/>
      </div>
      <div className='lista_productos'>
      <Productos
      imagen = '02'
      nombre = 'Verde'/>
      <Productos
      imagen = '03'
      nombre = 'Negro'/>
      <Productos
      imagen = '04'
      nombre = 'Blanco'/>
      </div>
    </div>
  );
}

export default App;
