import React from 'react';
import {Header} from "./Componentes/Header";
import {Productos} from './Componentes';
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
      nombre = 'verde'/>
      <Productos
      imagen = '02'
      nombre = 'verde'/>
      <Productos
      imagen = '02'
      nombre = 'verde'/>
      </div>
    </div>
  );
}

export default App;
