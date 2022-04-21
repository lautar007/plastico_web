import React from "react";
import { Link } from "react-router-dom";
import './Card.css';


export default function Card({titulo, imagen, id, subtitulo}){

    return(
        <div className="img-container">
            <Link to= {'/artistic/' + id}>
                <img src={imagen} alt="img not found"></img>
                <h3>{subtitulo.slice(0, 40) + '...'}</h3>
                <h2>{titulo}</h2>
            </Link>
        </div>
    )
}