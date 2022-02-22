import React from "react";
import { Link } from "react-router-dom";
import './Landing.css';

export default function Landing (){
    return(
        <div id="fadeIn">
            <div id="plastic">
                <img id="land-logo" src="https://i.pinimg.com/564x/a7/34/46/a73446345a4c441921f6d44eb270bcfd.jpg"/>
            </div>
            <div id="enterB">
                <Link to='/home'>
                  <button id="buttonE">Entrar</button>
                </Link>
            </div>
        </div>
    )
}