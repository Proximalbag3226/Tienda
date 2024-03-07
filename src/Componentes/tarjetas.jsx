export function Tarjetas(props){
    return(
        <div className="tarjeta">
            <img src={require(`../images/${props.imagen}.jpg`)}/>
        </div>
    );
}