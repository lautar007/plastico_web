import React from "react";
import { Link } from "react-router-dom";
import './Landing.css';

export default function Landing (){
    return(
        <div id="fadeIn">
            <div id="plastic">
                <h1 id="titulo1">Plástico Estudio</h1>
            </div>
            <div id="enterB">
                <Link to='/home'>
                  <button id="buttonE">Entrar</button>
                </Link>
            </div>
        </div>
    )
}