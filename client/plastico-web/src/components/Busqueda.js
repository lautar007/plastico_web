import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPublicaciones } from "../actions/actions";
import Card from "./Card";
import './Artistic.css';
import { Link } from "react-router-dom";
import Lupa from '../media/Lupa.png';

export default function Busqueda (){

    const {search} = useParams();
    console.log(search)

    const dispatch = useDispatch();
    const artistic = useSelector((state)=>state.Artistico);
    const comercial = useSelector((state)=>state.Comercial);
    const [search1, setSearch1] = useState('');

    useEffect(()=>{
        dispatch(getPublicaciones()); 
    }, [dispatch]);

    function handleSearchBar(e){
        e.preventDefault();
        setSearch1(e.target.value);
        console.log(search1);
    }

    const artResult = artistic.filter((a)=>a.titulo.toUpperCase().includes(search.toUpperCase()));
    console.log(artResult);
    const comResult = comercial.filter((c)=>c.titulo.toUpperCase().includes(search.toUpperCase()));
    console.log(comResult);
    const artService = artistic.filter((a)=>a.subtitulo.includes('#' + search.toLowerCase()));
    console.log(artService);
    const comService = comercial.filter((c)=>c.subtitulo.includes('#' + search.toLowerCase()));
    console.log(comService);

    function showResults (){
        if(artResult.length > 0){
            console.log('funciona');
            return(
                <div className="cont-cards">
                    {
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
                </div>
            ) 
        }
        if(comResult.length > 0){
            console.log('funciona');
            return(
                <div className="cont-cards">
                    {
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
                </div>
            ) 
        }
        if(artService.length > 0){
            console.log('funciona');
            return(
                <div className="cont-cards">
                    {
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
                </div>
            ) 
        }
        if(comService.length > 0){
            console.log('funciona');
            return(
                <div className="cont-cards">
                    {
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
                </div>
            ) 
        }
        else return (
            <div>
                <h2 className="searchResults">Por ahora no existen posteos que coincidan con tu b??squeda</h2>
            </div>
        )
    }

    return (
        <div>
            <h1>Estos son los resutlados para: {`"` + search + `"`}</h1>
            <div  className="searchBar1">
                    <Link to={'/busqueda/' + search1}>
                    <div className="searchLupa">
                        <img src={Lupa}/> 
                    </div>
                    </Link>
                    <input 
                    placeholder="Buscar por Nombre o Servicio"
                    onChange={(e) => {handleSearchBar(e)}}
                    />
            </div>
            {
                showResults()
            }
        </div>
    )
}