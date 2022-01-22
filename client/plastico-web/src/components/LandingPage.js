import React from "react";
import { Link } from "react-router-dom";
import './LandingPage.css'

export default function LandingPage(){
    return (
        <div className="landing-fondo">
            <h1>Plástico Estudio</h1>
            <div className="cont-targ">
                <div className="targ-art">
                    <h3 className = 'targ-title'>Foto Artística</h3>
                </div>
                <div className="targ-com">
                    <h3 className="targ-title0">Foto Comercial</h3>
                </div>
            </div>
        </div>
    )
}