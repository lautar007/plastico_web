import React from "react";
import { Link } from "react-router-dom";
import './Card.css';


export default function Card({titulo, imagen, id, subtitulo}){
    
    let tituloResumido = titulo;

    if(titulo.length > 20){
        tituloResumido = titulo.slice(0, 20) + '...'
    }

    return(
        <div className="img-container">
            <Link to= {'/artistic/' + id}>
                <img src={imagen} alt="img not found"></img>
                <h3>{subtitulo.slice(0, 40) + '...'}</h3>
                <h2 className="card-titulo">{tituloResumido}</h2>
            </Link>
        </div>
    )
}