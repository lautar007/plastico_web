import React from "react";
import { useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPublicacion} from "../actions/actions";
import { Link } from "react-router-dom";
import './PostDetail.css'
import LOGO from '../media/LOGO.png';

export default function PostDetail(){

    let {id} = useParams();
    
    const dispatch = useDispatch();
    const publi = useSelector((state)=>state.Publicacion);
    console.log(publi);
    
    var parrafos = []

    if(publi){
    parrafos = publi.contenido.split('\n');
    }

    console.log(parrafos)

    useEffect(()=>{
        dispatch(getPublicacion(id)); 
    }, [dispatch]);


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
                <p>Esta publicación no contiene ningún video</p>
            </div>
        )
    }


    return(
        <div>
            <div className="contPost">
                <img id="img-post" src={publi.imagen}/>
                <div id="contPostInfo">
                    <h1>{publi.titulo}</h1>
                    <hr/>
                    <h2>{publi.subtitulo}</h2>
                    <p>{publi.contenido}</p>
                    <hr/>
                    <p1>Fecha de publicación: {publi.fecha}</p1>
                    <p1>Galería de fotos, abajo ↓</p1>
                    <Link to={handleLink()}>
                        <button className="B-volver">Volver</button>
                    </Link>
                </div>
            </div>
            <div>
                <h1>Galería</h1>
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
                <h1>Video</h1>
                <div className="cont-galeria-post">
                {
                   publi.galeria && publi.galeria.length != 0 ?
                   video()
                   :
                   <div>
                   <h2>Esta publicación no contiene ningún video</h2>
                   <hr/>
                   </div>
                }
                </div>
            </div>
            </div>
        </div>
    )
}