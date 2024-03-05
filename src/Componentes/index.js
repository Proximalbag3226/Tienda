export function Productos(props){
    return(
        <div className="producto">
            <div className="contenedor">
                <figure>
                    <img src={require(`../images/img${props.imagen}.jpg`)}/>
                    <div className="capa">
                        <br/><br/><br/><br/><br/>
                        <a>{props.nombre}</a>
                    </div>
                </figure>
            </div>
        </div>
    );
}