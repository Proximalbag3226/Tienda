import React from "react";
import Logo_sf from "../images/Logo_sf.png"

export const Header = () =>{
    return(
        <header>
            <a href="#">
                <div className="logo">
                    <img src={Logo_sf} alt="logo" width={"150"}/>
                </div>
            </a>
            <ul className="header_text">
                <li>
                    <a href={"/"}>Inicio</a>
                </li>
                <li>
                    <a href={"/productos"}>Productos</a>
                </li>
            </ul>
            <div className="cart">
                <a href="/carrito">
                <box-icon name={"cart"}></box-icon>
                <span className="item__total">0</span>
                </a>
            </div>
        </header>
    );
}