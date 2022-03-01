import React from "react";
import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getPublicaciones } from "../actions/actions";

//los estilos de esta página estan dentro de ToDo.css

export default function PostAdmin (){

    const dispatch = useDispatch();
    const comercial = useSelector((state)=>state.Comercial);
    const artistico = useSelector ((state)=>state.Artistico);
    const noticia = useSelector((state)=>state.Noticia);

    useEffect(()=>{
        dispatch(getPublicaciones()); 
    }, [dispatch]);

    console.log(comercial);
    console.log(artistico);
    console.log(noticia);

    function handleDelete (e){
        e.preventDefault();
        dispatch(deletePost(e.target.value));
        alert('Post eliminado, beibi');
        window.location.reload();
    }

    return (
        <div>
            <h1 id="admin-tit">Administración de publicaciones</h1>
            {
                artistico && artistico.map(post =>{
                    return(
                        <div key={Math.random()} className='cont-tarea'>
                            <img id="img-adminPost" src={post.imagen}/>
                            <div>
                                <h4 id='label2'>Fecha:</h4>
                                <p id='data'>{post.fecha}</p>
                            </div>
                            <div>
                                <h4 id='label2'>Publicacion:</h4>
                                <p id='data-tarea'>{post.titulo}</p>
                            </div>
                            <div>
                                <h4 id='label2'>Categoría:</h4>
                                <p id="data">{post.categoria}</p>
                            </div>
                            <button id = 'B-delete' value={post.titulo} onClick={(e)=> handleDelete(e) }>Eliminar post</button>
                        </div>
                    )
                })
            }
             {
                comercial && comercial.map(post =>{
                    return(
                        <div key={Math.random()} className='cont-tarea'>
                            <img id="img-adminPost" src={post.imagen}/>
                            <div>
                                <h4 id='label2'>Fecha:</h4>
                                <p id='data'>{post.fecha}</p>
                            </div>
                            <div>
                                <h4 id='label2'>Publicacion:</h4>
                                <p id='data-tarea'>{post.titulo}</p>
                            </div>
                            <div>
                                <h4 id='label2'>Categoría:</h4>
                                <p id="data">{post.categoria}</p>
                            </div>
                            <button id = 'B-delete' value={post.titulo} onClick={(e)=> handleDelete(e) }>Eliminar post</button>
                        </div>
                    )
                })
            }
             {
                noticia && noticia.map(post =>{
                    return(
                        <div key={Math.random()} className='cont-tarea'>
                            <img id="img-adminPost" src={post.imagen}/>
                            <div>
                                <h4 id='label2'>Fecha:</h4>
                                <p id='data'>{post.fecha}</p>
                            </div>
                            <div>
                                <h4 id='label2'>Publicacion:</h4>
                                <p id='data-tarea'>{post.titulo}</p>
                            </div>
                            <div>
                                <h4 id='label2'>Categoría:</h4>
                                <p id="data">{post.categoria}</p>
                            </div>
                            <button id = 'B-delete' value={post.titulo} onClick={(e)=> handleDelete(e) }>Eliminar post</button>
                        </div>
                    )
                })
            }
             
        </div>
    )
}