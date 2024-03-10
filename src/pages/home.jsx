import { Header } from "../Componentes/header";
import { Tarjetas } from "../Componentes/tarjetas";
import PopularKeywordsComponent from "../Componentes/settitles";
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
            <div className="central">
            <figure>
                <img src={require("../images/deportiva.jpg")}/>
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"</h1>
            </figure>
            </div>
            <PopularKeywordsComponent
            nombre = 'Hola'/>
        </div>
    )
}

export default Home