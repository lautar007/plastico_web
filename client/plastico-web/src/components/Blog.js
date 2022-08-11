import React from "react";
import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPublicaciones } from "../actions/actions";
import CardBlog from "./CardBlog";
import { Link } from "react-router-dom";

export default function Blog () {

    const dispatch = useDispatch();
    const noticia = useSelector((state)=>state.Noticia);
    let array = 'hola'

    useEffect(()=>{
        dispatch(getPublicaciones()); 
    }, [dispatch]);

    //function galeriaBlog(el){
      //  let fotos = []
      //      if(el.galeria){
      //      fotos = el.galeria;
      //      console.log(fotos);
      //  }
      //  return fotos
    //}

    return(
        <div>
            <h1>Blog de noticias</h1>
            <div className="contAll-blog">
                <div className="menu-blog">
                    <h3>Entradas: </h3>
                    <div className="entradas-blog">
                    {noticia && noticia.map((el)=>{
                        return(
                        <div key={Math.random()}>
                        <hr/>
                        <Link id="link" to={'/blog/' + el.id}>
                        <p id="tit-menu" key={el.id}>- {el.fecha}| {el.titulo.slice(0, 15)}...</p>
                        </Link>
                        </div>
                    )})}
                    </div>
                </div>
                <div className="card-blogs">
                {
                    noticia && noticia.map((el)=>{
                        return(
                            <div key={el.id}>
                                <CardBlog
                                titulo={el.titulo}
                                imagen={el.imagen}
                                id={el.id}
                                subtitulo={el.subtitulo}
                                contenido={el.contenido}
                                fecha = {el.fecha}
                                galeria = {el.galeria}
                                />
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}