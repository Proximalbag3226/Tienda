import React from 'react';
import ReactDOM from 'react-dom/client';  
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './pages/productos';
import Home from './pages/home';
import { Carrito } from './pages/carrito';

const rutas = createBrowserRouter([
  {
    path: "/productos",
    element: <App/>
  },
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/carrito",
    element: <Carrito/>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));  
root.render(
  <React.StrictMode>
    <RouterProvider router={rutas}/>
  </React.StrictMode>
);
