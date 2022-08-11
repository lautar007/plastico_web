import React from "react";
import './Staff.css';
import staff from '../media/staff.jpg';

export default function Staff () {
    return(
        <div>
            <h1>¿Quienes Somos?</h1>
            <div>
                <div className="manifest">
                    <p>Plástico Estudio se presenta en el mundo audiovisual en busca de la inserción contaminante de su presencia, REDUCIENDO el contenido genérico, REUTILIZANDO las herramientas del mercado actual y RECICLANDO criterios de desarrollo históricos en la industria.</p>
                    <p>Somos un dúo creativo que nos enfocamos en soluciones integrales audiovisuales  artísticas y multimediales. Los servicios que ofrecemos son: Fotografía editorial, fotografía publicitaria, dirección de arte, dirección creativa, estilismo, retoque digital, diseño gráfico, servicio de postproducción de video, entre otros.</p>
                    <p>Trabajamos de manera personalizada para atender a las necesidades de cada cliente, y logrando así, un resultado y producto satisfactorio  para ambas partes con su respectivo valor agregado.</p>
                </div>
                <div className="staff">
                    <div className="person">
                        <h2>Nathalie Lopez</h2>
                        <p className="pe1"> - Producción Audiovisual</p>
                        <p className="pe1"> - Dirección Creativa</p> 
                        <p className="pe1"> - Diseño de Producción</p>
                        <p className="pe1"> - Diseño Gráfico</p>
                        <p className="pe1"> - ST</p> 
                        <p className="pe1"> - Set Designer</p>
                        <p className="pe1"> - Dirección de Arte</p>
                    </div>
                    <img src={staff}/>
                    <div className="person">
                        <h2>Lautaro Robin</h2>
                        <p className="pe2"> Producción Audiovisual - </p>
                        <p className="pe2"> Dirección Creativa - </p> 
                        <p className="pe2"> Fotografía Profesional - </p>
                        <p className="pe2"> Digital Retoucher - </p>
                        <p className="pe2"> Motion Grapher - </p> 
                        <p className="pe2"> Video Editor - </p>
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