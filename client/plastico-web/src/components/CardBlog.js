import React from "react";
import './CardBlog.css';

export default function CardBlog({titulo, imagen, id, subtitulo, contenido, fecha, galeria}){

    const parrafos = contenido.split('\n');

    return(
        <div id="cont-blog">
            <div id="paper-blog">
                <h2 id="titulo-blog">{titulo}</h2>
                <hr></hr>
                <div id="cont-img-blog">
                    <img id="img-blog" src={imagen}/>
                    <h2 id="subt-blog">"{subtitulo}"</h2>
                </div>
                {
                    parrafos && parrafos.map((el) =>{
                        return(
                            <p id="content-blog" key={Math.random()}>{el}</p>
                        )
                    })
                }
                <div className="cont-galeria" key={Math.random()}>
                {
                    galeria && galeria.map(el=>{
                        return(
                                <img id="img-blog" key={Math.random()} src={el}></img>
                        )
                    })
                }
                </div>
                <hr/>
                <p id="fecha-blog">fecha de publicación: {fecha}</p>
            </div>
        </div>
    )
}