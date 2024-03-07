import { Header } from "../Componentes/header";
import { Tarjetas } from "../Componentes/tarjetas";
function Home(props){
    return(
        <div className="App">
            <div className="cabeza">
            <Header/>
            </div>
            <div className="novedades">
                <Tarjetas
                imagen = "novedades1"/>
                <Tarjetas
                imagen = "novedades1"/>
                <Tarjetas
                imagen = "novedades1"/>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Home