import React from "react";
import './Staff.css'

export default function Staff () {
    return(
        <div>
            <h1>¿Quienes Somos?</h1>
            <div className="manifest">
                <h2>Manifiesto</h2>
                <p>Plástico Estudio se presenta en el mundo audiovisual en busca de la inserción contaminante de su presencia. REDUCIENDO el contenido genérico, REUTILIZANDO las herramientas del mercado actual y RECICLANDO criterios de desarrollo históricos en la industria.</p>
            </div>
            <iframe className="video" width="530" height="401" src="https://www.youtube.com/embed/C-u5WLJ9Yk4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}