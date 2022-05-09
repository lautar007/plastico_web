import React from "react";
import { useParams } from "react-router-dom";
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
    
    console.log(pag);
    var cont = 1; 

    function leftArrow(){
        if(cont === 1){
            cont = 5;
            console.log('#slider' + cont);
            return '#slider' + cont;
        }
        cont = cont - 1; 
            console.log('#slider' + cont);
            return '#slider' + cont;
    }

    function rigthArrow(){
        if(cont === 5){
            cont = 1;
            console.log('#slider' + cont);
            return '#slider' + cont;
        }
        cont = cont + 1; 
        console.log('#slider' + cont);
        return '#slider' + cont;
    }



    return(
        <div>
            <h1>Galería de imágenes</h1>
            <div className="cont-gal">

                <a href={leftArrow()}>←</a>

                <ul className="slider">
                  <li id = 'slider1'>
                      <img src={gal? gal[0]: logo}/>
                  </li>
                  <li id = 'slider2'>
                      <img src={gal? gal[1]: logo}/>
                  </li>
                  <li id = 'slider3'>
                      <img src={gal? gal[2]: logo}/>  
                  </li>
                  <li id = 'slider4'>
                      <img src={gal? gal[3]: logo}/>
                  </li>
                  <li id = 'slider5'>
                      <img src={gal? gal[4]: logo}/>
                  </li>
                </ul>

                <a href={rigthArrow()}>→</a>

            </div>
        </div>
    )
}