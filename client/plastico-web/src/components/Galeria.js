import React from "react";
import { useParams } from "react-router-dom";

export default function Galeria () {
    
    let {id} = useParams(); 

    return(
        <div>
            <h1>Esta es la galería de la publicación: {id} </h1>
        </div>
    )
}