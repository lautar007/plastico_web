import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPublicaciones } from "../actions/actions";
import Card from "./Card";

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

    const artResult = artistic.toUpperCase().filter((a)=>a.titulo.includes(search.toUpperCase()));
    console.log(artResult);
    const comResult = comercial.toUpperCase().filter((c)=>c.titulo.includes(search.toUpperCase()));
    console.log(comResult);
    const artService = artistic.filter((a)=>a.subtitulo.includes('#' + search.toLowerCase()));
    console.log(artService);
    const comService = comercial.filter((c)=>c.subtitulo.includes('#' + search.toLowerCase()));
    console.log(comService);

    function showResults (){
        if(artResult.length > 0){
            artResult.map(el =>{
                return(
                    <div key={el.id}>
                        <Card
                        titulo={el.titulo}
                        imagen={el.imagen}
                        id={el.id}
                        subtitulo={el.subtitulo}
                        />
                    </div>
                )
            })
        }
        if(comResult.length > 0){
            comResult.map(el =>{
                return(
                    <div key={el.id}>
                        <Card
                        titulo={el.titulo}
                        imagen={el.imagen}
                        id={el.id}
                        subtitulo={el.subtitulo}
                        />
                    </div>
                )
            })
        }
        if(artService.length > 0){
            artService.map(el =>{
                return(
                    <div key={el.id}>
                        <Card
                        titulo={el.titulo}
                        imagen={el.imagen}
                        id={el.id}
                        subtitulo={el.subtitulo}
                        />
                    </div>
                )
            })
        }
        if(comService.length > 0){
            comService.map(el =>{
                return(
                    <div key={el.id}>
                        <Card
                        titulo={el.titulo}
                        imagen={el.imagen}
                        id={el.id}
                        subtitulo={el.subtitulo}
                        />
                    </div>
                )
            })
        }
    }

    return (
        <div>
            <h1>Estos son los resutlados para: {`"` + search + `"`}</h1>
            {
                showResults()
            }
        </div>
    )
}