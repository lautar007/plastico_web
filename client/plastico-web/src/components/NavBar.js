import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

export default function NavBar () {

    return (
        <div className="NB-fondo">
            <div className="cont-logo">
               <div className="logo-titulo"> 
                <Link className="logo" to= '/'>
                    <img className="logo" src="https://i.pinimg.com/564x/ec/31/5d/ec315d88a480b81f255fa9c8bbfca518.jpg"></img>
                </Link>
                <h1 className="pri-titulo">Plástico Estudio.</h1>
                </div>
                <div>
                    <Link to = '/manifest'>
                       <button className="boton-mani">Manifiesto</button>
                    </Link>
                    <Link to = '/blog'>
                       <button className="boton-blog">Blog</button>
                    </Link>
                    <Link to = '/admin'>
                       <button className="boton-admin">Administración</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}