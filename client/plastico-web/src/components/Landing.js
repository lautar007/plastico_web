import React from "react";
import { Link } from "react-router-dom";
import './Landing.css';
import LOGO from '../media/LOGO.png';
import presentacion from '../media/presentacion.mp4'


export default function Landing (){
    return(
        <div>
            <video src={presentacion} type="video/mp4" autoPlay muted loop></video>
          <div id="fadeIn">
              <div id="plastic">
                  <img id="land-logo" src = {LOGO}/>
              </div>
              <div id="enterB"> 
                  <Link to='/home'>
                    <button id="buttonE">Entrar</button>
                  </Link>
              </div>
          </div>
        </div>
    )
}