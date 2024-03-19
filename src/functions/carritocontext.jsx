import React, { useState, createContext, useEffect} from "react";

export const Carritocontext = createContext();
export function CarritoProvider(props){
    const [carrito, setcarrito] = useState([]);

    //Esta funcion se ejecuta al principio de la aplicacion pra cargar el carrito en el almacenamiento local
    useEffect(() => {
        const CarritoGuardado = localStorage.getItem("carrito");
        if(CarritoGuardado){
            setcarrito(JSON.parse(CarritoGuardado));
        }   
    }, []);

    //Y esta funcion se ejecuta al cierre de la aplicacion para guardar el carito en el almacenamiento local
    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);

    return(
        <Carritocontext.Provider value={[carrito, setcarrito]}>
            {props.children}
        </Carritocontext.Provider>
    )
};

