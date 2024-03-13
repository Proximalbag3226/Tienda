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
            <div className="productgalery">
            <section className="galeria">
                <img src = {require("../images/producto1.jpg")}/>                
                <img src = {require("../images/producto2.jpeg")}/>
                <img src = {require("../images/producto3.jpeg")}/>
                <img src = {require("../images/producto4.jpg")}/>
                <img src = {require("../images/producto5.jpg")}/>
                <img src = {require("../images/producto6.jpg")}/>
            </section>
            <PopularKeywordsComponent
            producto1 = 'Tenis'
            producto2 = 'Suadaderas y hoddies'
            producto3 = 'Gorras'
            producto4 = 'Pants'
            producto5 = 'Playeras'
            producto6 = 'Accesorios'
            producto7 = 'Gym'
            producto8 = 'Colaboraciones'
            producto9 = 'Running'
            producto10 = 'Skate'
            producto11 = 'Running'
            producto12 = 'Exclusivos'/>
            </div>
        </div>
    )
}

export default Home