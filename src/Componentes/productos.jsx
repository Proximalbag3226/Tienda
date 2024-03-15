import { data } from "../data";
import { useContext, useState } from "react";
import { Carritocontext } from "../functions/carritocontext";


export function Productos(props, {allproducts, setallproducts}){
    const [carrito, setcarrito] = useContext(Carritocontext);

    const handleclick = () => {
        setcarrito([...carrito, props.producto]);
        console.log("Los productos se agregaron al carrito",props.producto, carrito)
        alert("Producto agregado al carrito con exito");

    };

    return(
        <div className="producto">
            <div className="contenedor" key={props.id}>
                <figure>
                    <img src={require(`../images/img${props.imagen}.jpg`)}/>
                    <div className="capa">
                        <br/><br/><br/><br/>
                        <a>{props.producto}</a>
                        <br/><br/>
                        <a>{props.precio}</a>
                        <br/><br/>
                        <button onClick={handleclick}>Añadir al carrito</button>
                    </div>
                </figure>
            </div>
        </div>
    );
}