import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postPublicacion } from "../actions/actions";
import './Form.css';

export default function Form() {

    const dispatch = useDispatch();

    const hoy = new Date()
    const fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();

    const [input, setInput] = useState({
        titulo: '',
        fecha: fecha,
        contenido: '',
        imagen:'',
        categoria:'',
        galeria:[],
        subtitulo:''
    })

    function handleChange(e){
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    function handleGaleria(e){
        e.preventDefault();
        input.galeria.push(e.target.value)
    }

    function handleCheck(e){
        if(e.target.checked){
            setInput({
                ...input,
                categoria: e.target.value
            })
        }
    }

    function handleSubmitPost(e){
        e.preventDefault();
        if(input.titulo === '' || input.contenido === '' || input.categoria === ''){
            alert('Debe completar todos los campos requeridos: *')
        } else {
        console.log(input);
        dispatch(postPublicacion(input))
        alert('La publicación se creó correctamente')
        }
    }
 

    return(
        <div>
            <h1 id="titulo-form">Cración de un nuevo Post</h1>
            <div id="cont-formPost">
                <form id="form-post">
                        <label id='labels'>*Título:</label>
                        <input
                          id='input-post'
                          type = 'text'
                          name = 'titulo'
                          placeholder="Título de la publicación"
                          onChange={(e)=> handleChange(e)}
                        />

                        <label id='labels'>Subtítulo:</label>
                        <input
                          id='input-post'
                          type = 'text'
                          name = 'subtitulo'
                          placeholder="Subtítulo de la publicación"
                          onChange={(e)=> handleChange(e)}
                        />

                        <label id='labels'>*Contenido:</label>
                        <textarea 
                          id='input-postC'
                          type = 'text'
                          name = 'contenido'
                          placeholder="Cuerpo de la publicación"
                          onChange={(e)=> handleChange(e)}
                        />

                        <label id='labels'>Imagen de Portada:</label>
                        <input
                          id='input-post'
                          type = 'text'
                          name = 'imagen'
                          placeholder="URL de la imagen principal"
                          onChange={(e)=> handleChange(e)}
                        />

                        <label id='labels'>*Categoria:</label>
                        <div id="check-cat">
                            <div>
                            <label>Artistico</label> 
                            <input
                             type='checkbox'
                             name="Artistico"
                             value="artistico"
                             onChange={(e)=> handleCheck(e)}
                            /> 
                            </div>
                            <div>
                            <label>Comercial</label>
                            <input
                             type='checkbox'
                             name="Comercial"
                             value="comercial"
                             onChange={(e)=> handleCheck(e)}
                            />
                            </div>
                            <div> 
                            <label>Noticia de Blog</label>
                            <input
                             type='checkbox'
                             name="Noticia"
                             value="noticia"
                             onChange={(e)=> handleCheck(e)}
                            />
                            </div> 
                        </div>

                        <label id='labels'>imagenes de galería:</label>
                        <input
                          id='input-post'
                          type = 'text'
                          name = 'galeria1'
                          placeholder="URL imagen 1"
                          onChange={(e)=> handleGaleria(e)}
                        />
                        <input
                          id='input-post'
                          type = 'text'
                          name = 'galeria2'
                          placeholder="URL imagen 2"
                          onChange={(e)=> handleGaleria(e)}
                        />
                        <input
                          id='input-post'
                          type = 'text'
                          name = 'galeria3'
                          placeholder="URL imagen 3"
                          onChange={(e)=> handleGaleria(e)}
                        />
                        <input
                          id='input-post'
                          type = 'text'
                          name = 'galeria4'
                          placeholder="URL imagen 4"
                          onChange={(e)=> handleGaleria(e)}
                        />

                    <button id="btn-crear" onClick={(e)=> handleSubmitPost(e)} >Crear Post</button>
                </form>
            </div>
        </div>
    )
}