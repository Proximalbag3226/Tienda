import React from 'react';
import ReactDOM from 'react-dom/client';  
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/home';

const rutas = createBrowserRouter([
  {
    path: "/productos",
    element: <App/>
  },
  {
    path: "/",
    element: <Home/>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));  
root.render(
  <React.StrictMode>
    <RouterProvider router={rutas}/>
  </React.StrictMode>
);
