import React from "react";
import { useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPublicacion} from "../actions/actions";
import { Link } from "react-router-dom";
import LOGO from '../media/LOGO.png';
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

    <iframe width="1350" height="480" src="https://www.youtube.com/embed/6r2aucghTUY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    function video(){
        console.log(publi.galeria[publi.galeria.length -1])
        if(publi.galeria[publi.galeria.length -1].includes('www.youtube.com')){
            let videito = publi.galeria[publi.galeria.length -1].slice(32,43);
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

    // --- zona de hardcodeo ----
    //Aquí se harcodea un array con URL de imágenes para reemplazar lo que llega de la DB y poder usarlo a nivel local.
    let hardGaleria = ['https://i.pinimg.com/564x/8f/9c/79/8f9c7953c5bb091debf7f2848ef1c319.jpg', 'https://i.pinimg.com/564x/23/dd/ec/23ddec61accdace2506689e799bbb053.jpg', 'https://i.pinimg.com/564x/22/b2/ca/22b2ca3e7e48cd74e56f8e96d93fe472.jpg', 'https://i.pinimg.com/564x/f8/e0/d4/f8e0d45fbfbef9d2c1ac9ad60ae079eb.jpg', 'https://i.pinimg.com/564x/a1/e8/a0/a1e8a09479fa66df0e58a6fbca1362ae.jpg']
    let hardImagen = 'https://i.pinimg.com/564x/cf/e7/40/cfe740ab4c68389742d91a2780a3a9c6.jpg'


    return(
        <div>
            <div className="contPost">
                <img id="img-post" src={hardImagen}/>
                <div id="contPostInfo">
                    <h1>Este es un post hardcodeado</h1>
                    <hr/>
                    <h2>Sirve como prueba para el desarrollador</h2>
                    <p>De esta forma el desarrollador puede visualizar los cambios que se generaran automáticamente de forma online, a nivel local, lo que facilita muchísimo su labor.</p>
                    <hr/>
                    <p1>Fecha de publicación: 31/02/2023</p1>
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
                    hardGaleria && hardGaleria != 0 ?
                    <div>
                        {
                    hardGaleria.map(img =>{
                        if(img.includes('jpg') || img.includes('png')){
                        return(
                                <Link to={ '/galeria/' + id + '#slider1'}>
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