import React from "react";
import LOGO from '../media/LOGO.png';
import './CardBlog.css';
import { Link } from "react-router-dom";

export default function CardBlog({titulo, imagen, subtitulo, contenido, fecha, galeria, id}){

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
                <img src={LOGO} id='img-blog-logo'/>
                </div>
                <Link id="link" to={'/blog/' + id}>
                    <h4 className="link-comentarios">Comentarios...</h4>
                </Link>
                <hr/>
                <p id="fecha-blog">fecha de publicación: {fecha}</p>
            </div>
        </div>
    )
}