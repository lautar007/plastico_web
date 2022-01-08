import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

export default function NavBar () {

    return (
        <div className="NB-fondo">
            <div className="cont-logo">
                <Link className="logo" to= '/'>
                    <img className="logo" src="https://i.pinimg.com/564x/ec/31/5d/ec315d88a480b81f255fa9c8bbfca518.jpg"></img>
                </Link>
            </div>
        </div>
    )
}