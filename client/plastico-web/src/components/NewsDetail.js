import React from "react";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPublicacion} from "../actions/actions";

export default function NewsDetail(){

    let {id} = useParams();
    
    const dispatch = useDispatch();
    const noticia = useSelector((state)=>state.Publicacion);
    console.log(noticia);
 

    useEffect(()=>{
        dispatch(getPublicacion(id)); 
    }, [dispatch]);
    
 
    //const parrafos = noticia.contenido.split('\n');

    return(
        <div id="cont-blog">
        <div id="paper-blog">
            <h2 id="titulo-blog">{noticia.titulo}</h2>
            <hr></hr>
            <div id="cont-img-blog">
                <img id="img-blog" src={noticia.imagen}/>
                <h2 id="subt-blog">"{noticia.subtitulo}"</h2>
            </div>
            {
                noticia.contenido ?
                        <p id="content-blog" key={Math.random()}>{noticia.contenido}</p>
                        : null
            }
            <div className="cont-galeria" key={Math.random()}>
            {
                noticia.galeria && noticia.galeria.map(el=>{
                    return(
                            <img id="img-blog" key={Math.random()} src={el}></img>
                    )
                })
            }
            </div>
            <hr/>
            <p id="fecha-blog">fecha de publicación: {noticia.fecha}</p>
        </div>
    </div>
    )
}