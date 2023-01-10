import React from "react";
import { useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPublicacion} from "../actions/actions";
import { Link } from "react-router-dom";
import './PostDetail.css'
import LOGO from '../media/LOGO.png';
const publicaciones = require('../BDT/publics')

export default function PostDetail(){

    let {id} = useParams();
    
    const dispatch = useDispatch();
    //const publi = useSelector((state)=>state.Publicacion); //DESBLOQUEAR CUANDO  HAYA BACKEND
    const publi = publicaciones.filter(el => el.id === parseInt(id))[0];
    
    let parrafos = []
    
    // useEffect(()=>{
    //     dispatch(getPublicacion(id)); 
    // }, [dispatch]);


    function handleLink (){
      if(publi.categoria === 'artistico'){
          return '/artistic'
      }
      if(publi.categoria === 'comercial'){
          return '/comercial'
      }
      else{
          return '/home'
      }
    }

    <iframe width="1350" height="480" src="https://www.youtube.com/embed/6r2aucghTUY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    function video(){
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
                <p className="video" key= 'sin-video'>Esta publicación no contiene ningún video</p>
            </div>
        )
    }

    function handleParrafos (){
        parrafos = publi.contenido.split('\n');
        return ''
    }


    return(
        <div>
            <div className="contPost">
                <img id="img-post" src={publi.imagen}/>
                <div id="contPostInfo">
                    <h1>{publi.titulo}</h1>
                    <hr/>
                    <h2>{publi.subtitulo}</h2>
                    {
                        publi.contenido ?
                        handleParrafos()
                       :
                       null
                    }
                    {
                        parrafos && parrafos.map((el) =>{
                            return(
                                <p id="content-blog" key={Math.random()}>{el}</p>
                            )
                        })
                    }
                    <hr/>
                    <p>Fecha de publicación: {publi.fecha}</p>
                    <p>Galería de fotos, abajo ↓</p>
                    <Link to={handleLink()}>
                        <button className="B-volver" key='volver'>Volver</button>
                    </Link>
                </div>
            </div>
            <div>
                <h1 className="post-galeria">Galería</h1>
                <div className="cont-galeria-post">
                {
                    publi.galeria && publi.galeria.length != 0 ?
                    <div>
                    {
                publi.galeria.map(img =>{
                    if(img &&(img.includes('jpg') || img.includes('png'))){
                    return(
                            <Link to={ '/galeria/' + id}>
                                <img id="img-blog" key={Math.random()} src={img}></img>
                            </Link>
                    )
                    }
                }) 
                    }
                <img src={LOGO} id='img-blog-logo'/>
                </div>
                    :
                    <div>
                    <h2>Esta publicación no contiene una galería de imágenes</h2>
                    <hr/>
                    </div>
                }
                </div>
                
                <div>
                
                <div className="cont-galeria-post">
                {
                   publi.galeria && publi.galeria.length != 0 ?
                   <div>
                   {video()}
                   </div>
                   :
                   null
                }
                </div>
            </div>
            </div>
        </div>
    )
}