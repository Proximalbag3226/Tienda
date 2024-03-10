import { data } from "../data";

export function Productos(props, {allproducts, setallproducts}){

    const Agregar = () => console.log("Hola soy el carrito");

    return(
        <div className="producto">
            <div className="contenedor" key={props.id}>
                <figure>
                    <img src={require(`../images/img${props.imagen}.jpg`)}/>
                    <div className="capa">
                        <br/><br/><br/><br/>
                        <a>{props.nombre}</a>
                        <br/><br/>
                        <a>{props.precio}</a>
                        <br/><br/>
                        <button onClick={Agregar}>Añadir al carrito</button>
                    </div>
                </figure>
            </div>
        </div>
    );
}