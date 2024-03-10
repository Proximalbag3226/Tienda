import React from 'react';
import {Header} from "../Componentes/header";
import {Productos} from '../Componentes/productos';
import 'boxicons';
import { useState } from 'react';
import { data } from '../data';

function App() {
  const[allproducts, setallproducts] = useState([]);
  const[allcount, setallcount] = useState(0);
  const[total, settotal] = useState(0); 

  return (
    <div className="App">
      <div className='cabeza'>
        <Header
        allproducts = {allproducts}
        setallproducts = {setallproducts}
        allcount = {allcount}
        setallcount = {setallcount}
        total = {total}
        settotal = {settotal}
        />
      </div>
      <div className='lista_productos'>
      {
        data.map((producto, index) => (
          <Productos
          imagen = {producto.imagen}
          nombre = {producto.nombre}
          allproducts = {allproducts}
          setallproducts = {setallproducts}
          allcount = {allcount}
          setallcount = {setallcount}
          total = {total}
          settotal = {settotal}/>
        ))}
      </div>
    </div>
  );
}

export default App;
