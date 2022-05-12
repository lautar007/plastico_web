import React from "react";
import './Staff.css';
import staff from '../media/staff.jpg';

export default function Staff () {
    return(
        <div>
            <h1>¿Quienes Somos?</h1>
            <div>
                <div className="manifest">
                    <h2>Manifiesto</h2>
                    <p>Plástico Estudio se presenta en el mundo audiovisual en busca de la inserción contaminante de su presencia. REDUCIENDO el contenido genérico, REUTILIZANDO las herramientas del mercado actual y RECICLANDO criterios de desarrollo históricos en la industria.</p>
                    <p>En Plástico Estudio nos enfocamos en soluciones integrales audiovisuales  artísticas y multimediales . Los servicios que ofrecemos son: Fotografía editorial, fotografía publicitaria , dirección de arte, dirección creativa, estilismo, retoque digital, diseño gráfico, servicio de postproducción de video, entre otros.</p>
                    <p>Trabajamos de manera personalizada para atender a las necesidades de cada cliente, y logrando así, un resultado y producto satisfactorio  para ambas partes con su respectivo valor agregado.</p>
                </div>
                <h1>Socixs Fundadorxs</h1>
                <div className="staff">
                    <div className="person">
                        <h2>Nathalie Lopez</h2>
                        <p> - Producción Audiovisual</p>
                        <p> - Dirección Creativa</p> 
                        <p> - Diseño de Producción</p>
                        <p> - Diseño Gráfico</p>
                        <p> - ST</p> 
                        <p> - Set Designer</p>
                        <p> - Dirección de Arte</p>
                    </div>
                    <img src={staff}/>
                    <div className="person">
                        <h2>Lautaro Robin</h2>
                        <p> - Producción Audiovisual</p>
                        <p> - Dirección Creativa</p> 
                        <p> - Fotografía Profesional</p>
                        <p> - Digital Retoucher</p>
                        <p> - Motion Grapher</p> 
                        <p> - Video Editor</p>
                    </div>
                </div>


                <div className="staff2">
                    <img src={staff}/>
                    <div className="person2">
                        <h2>Nathalie Lopez</h2>
                        <p> - Producción Audiovisual</p>
                        <p> - Dirección Creativa</p> 
                        <p> - Diseño de Producción</p>
                        <p> - Diseño Gráfico</p>
                        <p> - ST</p> 
                        <p> - Set Designer</p>
                        <p> - Dirección de Arte</p>
                    </div>
                    <div className="person2">
                        <h2>Lautaro Robin</h2>
                        <p> - Producción Audiovisual</p>
                        <p> - Dirección Creativa</p> 
                        <p> - Fotografía Profesional</p>
                        <p> - Digital Retoucher</p>
                        <p> - Motion Grapher</p> 
                        <p> - Video Editor</p>
                    </div>
                </div>
            </div>
        </div>
    )
}