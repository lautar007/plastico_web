import React from "react";
import { useEffect} from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPublicacion, putPublicacion} from "../actions/actions";
import './Edicion.css'

export default function PostDetail(){

    let {id} = useParams();
    
    const dispatch = useDispatch();
    const publi = useSelector((state)=>state.Publicacion);
    console.log(publi);

    useEffect(()=>{
        dispatch(getPublicacion(id)); 
        console.log('funciona')
    }, [dispatch]);


    const [input, setInput] = useState({
        titulo: '',
        fecha: '',
        contenido: '',
        imagen:'',
        categoria:'',
        galeria:[],
        subtitulo:''
    })


    //FUNCION PARA CAMBIAR TITULO, SUBTITULO, CONTENIDO E IMAGEN DE PORTADA
    function handleChange(e){
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log(input)
    }

    //FUNCION PARA CAMBIAR LA CATEGORÍA DEL POST
    function handleCheck(e){
        if(e.target.checked){
            setInput({
                ...input,
                categoria: e.target.value,
            });
            console.log(input.categoria)
        }
    }

    //FUNCION PARA CAMBIAR LAS SUBCATEGORIAS
    function handleSubCheck(e){
        if(e.target.checked === false && input.subtitulo.includes(` #${e.target.value}`)){
          input.subtitulo = input.subtitulo.replace(` #${e.target.value}`,'');
        }
        if(e.target.checked && !input.subtitulo.includes(e.target.value)){
          setInput({
            ...input,
            subtitulo: input.subtitulo + ` #${e.target.value}`
          })
        }
        console.log(input.subtitulo)
      }

    //FUNCION PARA CAMBIAR LAS IMAGENES DE LAS CATEGORÍAS
    function handleGaleria(e){
        e.preventDefault();
        setInput({
          ...input
        })
        input.galeria[e.target.name]= e.target.value
        console.log(input.galeria)
    }

    
    //FUNCION PARA LA VISUALIZACIÓN DE VIDEO ESTABLECIDO
    function videoEstablecido(){
        console.log(publi.galeria[6])
        if(publi.galeria[6] && publi.galeria[6].includes('www.youtube.com')){
            let videito = publi.galeria[6].slice(32,43);
            return (
                <div>
                     <iframe width="484" height="480" src={`https://www.youtube.com/embed/${videito}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            )
        }
        else return (
            <div>
                <h4 className="ed-origen">Esta publicación no contiene ningún video</h4>
            </div>
        )
    }

    //FUNCION PARA LA VISUALIZACIÓN DE UN NUEVO VIDEO
    function nuevoVideo(){
        console.log(input.galeria[input.galeria.length -1])
        if(input.galeria.length > 0 && input.galeria[input.galeria.length -1].includes('www.youtube.com')){
            let videito = input.galeria[input.galeria.length -1].slice(32,43);
            return (
                <div>
                     <iframe width="484" height="480" src={`https://www.youtube.com/embed/${videito}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            )
        }
    }

    //FUNCION IMPORTANTE PARA APLICAR LOS CAMBIOS!!!!
    function handleSubmitPost(e){
        e.preventDefault();
       if(input.titulo === ''){
           input.titulo = publi.titulo
       }
       if(input.subtitulo === ''){
           input.subtitulo = publi.subtitulo
       }
       if(input.fecha ===''){
           input.fecha = publi.fecha
       }
       if(input.imagen === ''){
           input.imagen = publi.imagen
       }
       if(input.contenido === ''){
           input.contenido = publi.contenido
       }
       if(input.categoria === ''){
           input.categoria = publi.categoria
       }
       if(input.galeria[0] === undefined){
           input.galeria[0] = publi.galeria[0]
       }
       if(input.galeria[1] === undefined){
        input.galeria[1] = publi.galeria[1]
    }
    if(input.galeria[2] === undefined){
        input.galeria[2] = publi.galeria[2]
    }
    if(input.galeria[3] === undefined){
        input.galeria[3] = publi.galeria[3]
    }
    if(input.galeria[4] === undefined){
        input.galeria[4] = publi.galeria[4]
    }
    if(input.galeria[5] === undefined){
        input.galeria[5] = publi.galeria[5]
    }
    if(input.galeria[6] === undefined){
        input.galeria[6] = publi.galeria[6]
    }

    dispatch(putPublicacion(id, input));
    alert('El post se ha modificado con éxito')

    }


    return(
        <div>
            <h1>Edición de post: {publi.titulo}</h1>

            <div className="cont-edPost">
            <form id="form-post">

            <label className="ed-label">Título</label>
            <h4 className="ed-origen">Cambiar '{publi.titulo}' por:</h4>
            <input
            id='input-post'
            name ='titulo'
            type = 'text'
            onChange={(e)=> handleChange(e)}
            />

            <label className="ed-label">Subtítulo</label>
            <p>En caso de cambiar el subtítulo es pertinente volver a colocar las subcategorías.</p>
            <h4 className="ed-origen">Cambiar Subtitulo por:</h4>
            <input
            id='input-post'
            name ='subtitulo'
            type = 'text'
            onChange={(e)=> handleChange(e)}
            />

            <label className="ed-label">Contenido</label>
            <h4 className="ed-origen">Cambiar Contenido por:</h4>
            <textarea
            id='input-postC'
            type = 'text'
            name = 'contenido'
            onChange={(e)=> handleChange(e)}
            />

            <label className="ed-label">Imágen de portada</label>
            <img 
            id="img-edPost"
            src={publi.imagen}/>
            <h4 className="ed-origen">Cambiar por:</h4>
            <div className="inputConImagen">
            <input
            id='input-post'
            name ='imagen'
            type = 'text'
            placeholder="URL de la imagen"
            onChange={(e)=> handleChange(e)}
            />
            {
                  input.imagen?
                  <img id="img-edPost" src={input.imagen} alt='imagen de portada'></img>:
                  null
            }
            </div>

            <label className="ed-label">Cambio de Categoría</label>
                <div>
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

            {
            input.categoria === 'artistico'?
            <div className="ed-labelSub">
                <label className="ed-label">Subcategorías Artísticas</label>
                <div id="check-cat">
                <div>
                  <label>Estilismo</label> 
                  <input
                    type='checkbox'
                    name="Estilismo"
                    value="estilismo"
                    onChange={(e)=> handleSubCheck(e)}
                  /> 
                </div>
                <div>
                  <label>Dirección de Arte</label>
                  <input
                    type='checkbox'
                    name="Direccion de Arte"
                    value="direccion de arte"
                    onChange={(e)=> handleSubCheck(e)}
                    />
                </div>
                <div> 
                  <label>Producción Fotográfica y de Video</label>
                  <input
                    type='checkbox'
                    name="Produccion Fotográfica y de Video"
                    value="produccion fotografica y de video"
                    onChange={(e)=> handleSubCheck(e)}
                  />
                </div> 
                <div> 
                  <label>Postproducción Digital</label>
                  <input
                    type='checkbox'
                    name="Postproduccion Digital"
                    value="postproduccion digital"
                    onChange={(e)=> handleSubCheck(e)}
                  />
                </div> 
                <div> 
                  <label>Dirección Creativa</label>
                  <input
                    type='checkbox'
                    name="Dirección Creativa"
                    value="direccion creativa"
                    onChange={(e)=> handleSubCheck(e)}
                  />
                </div> 
              </div>
            </div>:
            null
            }
            {
                input.categoria === 'comercial'?
                <div className="ed-labelSub">
                   <label className="ed-label">Subcategorías Comerciales</label>
                   <div id="check-cat">
                <div>
                  <label>Foto Producto</label> 
                  <input
                    type='checkbox'
                    name="Foto Producto"
                    value="foto producto"
                    onChange={(e)=> handleSubCheck(e)}
                  /> 
                </div>
                <div>
                  <label>Diseño Gráfico & Branding</label>
                  <input
                    type='checkbox'
                    name="Diseño Grafico & Branding"
                    value="diseño grafico & branding"
                    onChange={(e)=> handleSubCheck(e)}
                    />
                </div>
                <div> 
                  <label>Postproducción Digital / Motion Graphics</label>
                  <input
                    type='checkbox'
                    name="Postproduccion Digital / Motion Graphics"
                    value="postproduccion digital / motion graphics"
                    onChange={(e)=> handleSubCheck(e)}
                  />
                </div> 
              </div>
                </div>:
                null
            }


            <label className="ed-label">Imágenes de la Galería</label>
            <div className="aclaracion">
               <h4 className="ed-origen">Imagen establecida</h4>
               <h4 className="ed-origen">-- Imagen nueva -- </h4>
            </div>
            <div className="div-imagenPortada">
                {publi.galeria? 
                  <img
                  id="img-edGalPost"
                  src={publi.galeria[0]}
                  />:
                  null
                }
              <input
                type = 'text'
                name = {0}
                placeholder="URL imagen 1"
                onChange={(e)=> handleGaleria(e)}
              />
              {
                input.galeria[0] !== undefined?
                <img id="img-adminPost" alt='img galería 1' src={input.galeria[0]}></img>
                : null
              }
              </div>

              <div className="div-imagenPortada">
              {publi.galeria? 
                  <img
                  id="img-edGalPost"
                  src={publi.galeria[1]}
                  />:
                  null
                }
              <input
                type = 'text'
                name = {1}
                placeholder="URL imagen 2"
                onChange={(e)=> handleGaleria(e)}
              />
              {
                input.galeria[1] !== undefined?  
                <img id="img-adminPost" alt='img galería 2' src={input.galeria[1]}></img>
                : null
              }
              </div>

              <div className="div-imagenPortada">
              {publi.galeria? 
                  <img
                  id="img-edGalPost"
                  src={publi.galeria[2]}
                  />:
                  null
                }
              <input
                type = 'text'
                name = {2}
                placeholder="URL imagen 3"
                onChange={(e)=> handleGaleria(e)}
              />
              {
                input.galeria[2] !== undefined?
                <img id="img-adminPost" alt='img galería 3' src={input.galeria[2]}></img>
                : null
              }
              </div>

              <div className="div-imagenPortada">
              {publi.galeria? 
                  <img
                  id="img-edGalPost"
                  src={publi.galeria[3]}
                  />:
                  null
                }
              <input
                type = 'text'
                name = {3}
                placeholder="URL imagen 4"
                onChange={(e)=> handleGaleria(e)}
              />
              {
                input.galeria[3] !== undefined?
                <img id="img-adminPost" alt='img galería 4' src={input.galeria[3]}></img>
                : null
              }
              </div>

              <div className="div-imagenPortada">
              {publi.galeria? 
                  <img
                  id="img-edGalPost"
                  src={publi.galeria[4]}
                  />:
                  null
                }
                 <input
                type = 'text'
                name = {4}
                placeholder="URL imagen 5"
                onChange={(e)=> handleGaleria(e)}
              />
              {
                input.galeria[4] !== undefined?
                <img id="img-edGalPost" alt='img galería 5' src={input.galeria[4]}></img>
                : null
              }
              </div>

              <div className="div-imagenPortada">
              {publi.galeria? 
                  <img
                  id="img-edGalPost"
                  src={publi.galeria[5]}
                  />:
                  null
                }
                 <input
                type = 'text'
                name = {5}
                placeholder="URL imagen 5"
                onChange={(e)=> handleGaleria(e)}
              />
              {
                input.galeria[5] !== undefined?
                <img id="img-edGalPost" alt='img galería 5' src={input.galeria[5]}></img>
                : null
              }
              </div>


              <label className="ed-label">Video</label>
              <h4 className="ed-origen">Video establecido en el post:</h4>
              {
                  publi.galeria?
                  videoEstablecido()
                  :
                  null
              }
              <h4 className="ed-origen">Colocar o Cabiar video por:</h4>
               <input
                id='input-post'
                type = 'text'
                name = {6}
                placeholder="URL de YouTube"
                onChange={(e)=> handleGaleria(e)}
              />
              {
              input.galeria?
              console.log(input.galeria[input.galeria.length -1])
              :
              null
              }

               <button id="ed-btn-crear" onClick={(e)=> handleSubmitPost(e)} >Aplicar los cambios</button>
            </form>
            </div>

        </div>
    )
}
