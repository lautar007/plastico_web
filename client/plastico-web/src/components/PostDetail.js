import React from "react";
import { useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPublicacion} from "../actions/actions";
import { Link } from "react-router-dom";
import './PostDetail.css'

export default function PostDetail(){

    let {id} = useParams();
    
    const dispatch = useDispatch();
    const publi = useSelector((state)=>state.Publicacion);
    console.log(publi);

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
                <h1>Video</h1>
                {
                   publi.galeria && publi.galeria[publi.galeria.length -1].includes('www.youtube.com')?
                   <iframe width="484" height="480" src={publi.galeria[publi.galeria.length -1]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                   :
                   <div>
                   <h2>Esta publicación no contiene ningún video</h2>
                   <hr/>
                   </div>
                }
            </div>
            <div>
                <h1>Galería</h1>
                <div className="cont-galeria-post">
                {
                    publi.galeria && publi.galeria.length != 0 ?
                    publi.galeria.map(img =>{
                        if(img.includes('jpg') || img.includes('png')){
                        return(
                                <Link to={ '/galeria/' + id + '#slider1'}>
                                <img id="img-blog" key={Math.random()} src={img}></img>
                                </Link>
                        )
                        }
                    }) 
                    :
                    <div>
                    <h2>Esta publicación no contiene una galería de imágenes</h2>
                    <hr/>
                    </div>
                }
                </div>
            </div>
        </div>
    )
}