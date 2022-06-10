import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPublicacion } from "../actions/actions";
import { useEffect } from "react";
import logo from '../media/LOGO.png';
import './Galeria.css';

export default function Galeria () {
    
    let {id} = useParams(); 

    const dispatch = useDispatch();
    const publi = useSelector((state)=>state.Publicacion);
    console.log(publi);
 
    const gal = publi.galeria
    console.log(gal)

    useEffect(()=>{
        dispatch(getPublicacion(id)); 
    }, [dispatch]);
    
    const pag = window.location.href;
    const cont = pag[pag.length -1];
    const contR = parseInt(cont) + 1;

    console.log(pag);
    console.log(cont);
  
    return(
        <div>
        <h1>Galería de imágenes</h1>
        <Link to = {'/artistic/' + id} >
        <button className="btn-contraseña">Volver</button>
        </Link>
        <div className="cont-gal">

            <ul id = 'galeria-M'>
              <li>
                  <a href ='#0'><img id= 'img-blog' src={gal[0]? gal[0]: logo}/></a>
              </li>
              <li>
                  <a href="#1"><img id= 'img-blog' src={gal[1]? gal[1]: logo}/></a>
              </li>
              <li>
                  <a href="#2"><img id= 'img-blog' src={gal[2]? gal[2]: logo}/></a>  
              </li>
              <li>
                  <a href="#3"><img id= 'img-blog' src={gal[3]? gal[3]: logo}/></a>
              </li>
              <li>
                  <a href="#4"><img id= 'img-blog' src={gal[4]? gal[4]: logo}/></a>
              </li>
              <li>
                  <a href="#5"><img id= 'img-blog' src={gal[5]? gal[5]: logo}/></a>
              </li>
            </ul>

        </div>

        <div className="modal" id="0">
            <div className="imagen-modal">
                <a className="arrow" href="#5"> ⇐</a>
                <img src={gal[0]? gal[0]: logo}/>
                <a className="arrow" href="#1"> ⇒</a>
            </div>
            <a className="cerrar-modal" href="">X</a>
        </div>

        <div className="modal" id="1">
            <div className="imagen-modal">
                <a className="arrow" href="#0"> ⇐</a>
                <img src={gal[1]? gal[1]: logo}/>
                <a className="arrow" href="#2"> ⇒</a>
            </div>
            <a className="cerrar-modal" href="">X</a>
        </div>

        <div className="modal" id="2">
            <div className="imagen-modal">
                <a className="arrow" href="#1"> ⇐</a>
                <img src={gal[2]? gal[2]: logo}/>
                <a className="arrow" href="#3"> ⇒</a>
            </div>
            <a className="cerrar-modal" href="">X</a>
        </div>

        <div className="modal" id="3">
            <div className="imagen-modal">
                <a className="arrow" href="#2"> ⇐</a>
                <img src={gal[3]? gal[3]: logo}/>
                <a className="arrow" href="#4"> ⇒</a>
            </div>
            <a className="cerrar-modal" href="">X</a>
        </div>

        <div className="modal" id="4">
            <div className="imagen-modal">
                <a className="arrow" href="#3"> ⇐</a>
                <img src={gal[4]? gal[4]: logo}/>
                <a className="arrow" href="#5"> ⇒</a>
            </div>
            <a className="cerrar-modal" href="">X</a>
        </div>

        <div className="modal" id="5">
            <div className="imagen-modal">
                <a className="arrow" href="#4"> ⇐</a>
                <img src={gal[5]? gal[5]: logo}/>
                <a className="arrow" href="#0"> ⇒</a>
            </div>
            <a className="cerrar-modal" href="">X</a>
        </div>

    </div>
    )
}