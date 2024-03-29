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
        galeria:[undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        subtitulo:''
    })

    function handleChange(e){
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log(input.contenido)
    }


    function handleGaleria(e){
        e.preventDefault();
        setInput({
          ...input
        })
        input.galeria[e.target.name]= e.target.value
        console.log(input.galeria)
    }

    function handleCheck(e){
        if(e.target.checked){
            setInput({
                ...input,
                categoria: e.target.value,
            });
            console.log(input.categoria)
        }
    }

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
        <h1 id="titulo-form">Creación de un nuevo Post</h1>
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

              <div className="div-imagenPortada">
              
              <label>Imagen de Portada:</label>
              <input
                type = 'text'
                name = 'imagen'
                placeholder="URL de la imagen principal"
                onChange={(e)=> handleChange(e)}
              />

                {
                  input.imagen?
                  <img id="img-adminPost" src={input.imagen} alt='imagen de portada'></img>:
                  null
                }
              </div>

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


              {
                input.categoria === 'artistico' ? 

                <div>
                  <label id='labels'>Subcategorias Artísticas:</label>
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
                <div> 
                  <label>Videoclip</label>
                  <input
                    type='checkbox'
                    name="Videoclip"
                    value="videclip"
                    onChange={(e)=> handleSubCheck(e)}
                  />
                </div>
              </div>
                </div>
                :
                null
              }

              {
                input.categoria === 'comercial' ?
                <div>
                  <label id='labels'>Subcategorias Comerciales:</label>
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
                <div> 
                  <label>Institucional</label>
                  <input
                    type='checkbox'
                    name="Institucional"
                    value="institucional"
                    onChange={(e)=> handleSubCheck(e)}
                  />
                </div> 
              </div>
                </div>
                :
                null
              }


              <label id='labels'>imagenes de galería:</label>

              <div className="div-imagenPortada">
              <input
                type = 'text'
                name = {0}
                placeholder="URL imagen 1"
                onChange={(e)=> handleGaleria(e)}
              />
              {
                input.galeria[0] !== undefined && input.galeria[0] !== ''?
                <img id="img-adminPost" alt='img galería 1' src={input.galeria[0]}></img>
                : null
              }
              </div>

              <div className="div-imagenPortada">
              <input
                type = 'text'
                name = {1}
                placeholder="URL imagen 2"
                onChange={(e)=> handleGaleria(e)}
              />
              {
                input.galeria[1] !== undefined && input.galeria[1] !== ''?  
                <img id="img-adminPost" alt='img galería 2' src={input.galeria[1]}></img>
                : null
              }
              </div>

              <div className="div-imagenPortada">
              <input
                type = 'text'
                name = {2}
                placeholder="URL imagen 3"
                onChange={(e)=> handleGaleria(e)}
              />
              {
                input.galeria[2] != undefined && input.galeria[2] != ''?
                <img id="img-adminPost" alt='img galería 3' src={input.galeria[2]}></img>
                : null
              }
              </div>

              <div className="div-imagenPortada">
              <input
                type = 'text'
                name = {3}
                placeholder="URL imagen 4"
                onChange={(e)=> handleGaleria(e)}
              />
              {
                input.galeria[3] != undefined && input.galeria[3] != ''?
                <img id="img-adminPost" alt='img galería 4' src={input.galeria[3]}></img>
                : null
              }
              </div>

              <div className="div-imagenPortada">
                 <input
                type = 'text'
                name = {4}
                placeholder="URL imagen 5"
                onChange={(e)=> handleGaleria(e)}
              />
              {
                input.galeria[4] != undefined && input.galeria[4] != ''?
                <img id="img-adminPost" alt='img galería 5' src={input.galeria[4]}></img>
                : null
              }
              </div>

              <div className="div-imagenPortada">
                 <input
                type = 'text'
                name = {5}
                placeholder="URL imagen 6"
                onChange={(e)=> handleGaleria(e)}
              />
              {
                input.galeria[5] != undefined && input.galeria[5] != ''?
                <img id="img-adminPost" alt='img galería 5' src={input.galeria[5]}></img>
                : null
              }
              </div>

               <label id='labels'>Contenido Audiovisual:</label>
               <input
                id='input-post'
                type = 'text'
                name = {6}
                placeholder="URL de YouTube"
                onChange={(e)=> handleGaleria(e)}
              />

              <button id="btn-crear" onClick={(e)=> handleSubmitPost(e)} >Crear Post</button>
            </form>
          </div>
        </div>
    )
}