import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPublicaciones } from "../actions/actions";

export default function Busqueda (){

    const {search} = useParams();
    console.log(search)

    const dispatch = useDispatch();
    const artistic = useSelector((state)=>state.Artistico);
    const comercial = useSelector((state)=>state.Comercial);

    useEffect(()=>{
        dispatch(getPublicaciones()); 
    }, [dispatch]);

    console.log(artistic);
    console.log(comercial);

    const artResult = artistic.filter((a)=>a.titulo.includes(search));
    console.log(artResult);
    const comResult = comercial.filter((c)=>c.titulo.includes(search));
    console.log(comResult);
    const artService = artistic.filter((a)=>a.subtitulo.includes('#' + search.toLowerCase()));
    console.log(artService);
    const comService = comercial.filter((c)=>c.subtitulo.includes('#' + search.toLowerCase()));
    console.log(comService);

    return (
        <div>
            <h1>Estos son los resutlados para: {`"` + search + `"`}</h1>
        </div>
    )
}