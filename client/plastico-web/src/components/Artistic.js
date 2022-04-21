import React from "react";
import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPublicaciones } from "../actions/actions";
import Card from "./Card";
import './Artistic.css';

export default function Artistic(){

    const dispatch = useDispatch();
    const artistic = useSelector((state)=>state.Artistico);

    useEffect(()=>{
        dispatch(getPublicaciones()); 
    }, [dispatch]);

    console.log(artistic)

    var art = artistic.reverse();

    return (
        <div>
            <div>
                <h1>trabajos artísticos</h1>
            </div>
            <div className="cont-cards">
                {
                    art && art.map((el)=>{
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
        </div>
    )
}