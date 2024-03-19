import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";
import { Header } from "../Componentes/header";
import { Carritocontext } from "../functions/carritocontext";
import { useContext, useEffect, useState } from "react";   

export function Carrito(){
    const[carrito, setCarrito] = useContext(Carritocontext)
    const [total, setTotal] = useState(0);

    const EliminarProducto = (id) => {
        const NuevoCarrito = carrito.filter((producto) => producto.id !== id);
        setCarrito(NuevoCarrito);
        localStorage.setItem('carrito', JSON.stringify(NuevoCarrito));
    };

    useEffect(() => {
        const CarritoEnLocal = JSON.parse(localStorage.getItem('carrito'));
        if(CarritoEnLocal){
            setCarrito(CarritoEnLocal);
        }
    }, [setCarrito]);

    useEffect(() =>{
        let sum = 0
        for(let i = 0; i>carrito.length; i++){
            sum += sum + carrito[i].precio;
        }
        setTotal(sum)
    },[carrito]);

    return(
        <div className="App">
            <div className="cabeza">
            <Header/>
            </div>
            <div className="carrito">
                {   
                carrito.length === 0 ? (
                        <p>No hay productos en el carrito de compras </p>
                    ) : (
                        carrito.map((producto) => (
                            <div className="productos_carrito" key={producto.id}>
                                <p>{producto.nombre}</p>
                                <p>{producto.precio}</p>
                                <button onClick={() => EliminarProducto(producto.id)}>Eliminar producto</button> 
                            </div>
                    ))
                    )
                }
                <br/>
                <h2>Total: {total}</h2>
            </div>
        </div>
    );
};