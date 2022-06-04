import React from "react";
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPublicacion} from "../actions/actions";
import { Link } from "react-router-dom";
import './PostDetail.css'
import LOGO from '../media/LOGO.png';

export default function PostDetail(){

    let {id} = useParams();

    const hoy = new Date()
    const fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
    
    const dispatch = useDispatch();
    const publi = useSelector((state)=>state.Publicacion);
    console.log(publi);

    useEffect(()=>{
        dispatch(getPublicacion(id)); 
    }, [dispatch]);

    const [input, setInput] = useState({
        titulo: '',
        fecha: fecha,
        contenido: '',
        imagen:'',
        categoria:'',
        galeria:[],
        subtitulo:''
    })


    return(
        <div>
            <h1>Edición de post: {publi.titulo}</h1>

            <div>
            <label>Título</label>
            <imput
            name ='titulo'
            type = 'text'
            value= {publi.titulo}
            />
            </div>

        </div>
    )
}
