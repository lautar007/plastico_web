import React from "react";
import { Link } from "react-router-dom";
import './Landing.css';
import LOGO from '../media/LOGO.png';


export default function Landing (){
    return(
        <div>
            <div id="fadeRes">
              <div id="plasticRes">
                  <img id="land-logoRes" src = {LOGO}/>
              </div>
              <div id="enterBRes">
                  <Link to='/home'>
                    <button id="buttonE">Entrar</button>
                  </Link>
              </div>
          </div>
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