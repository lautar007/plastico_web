import React from "react";
import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPublicaciones } from "../actions/actions";
import Card from "./Card";
import './Artistic.css';


export default function Comercial(){

    const dispatch = useDispatch();
    const comercial = useSelector((state)=>state.Comercial);

    useEffect(()=>{
        dispatch(getPublicaciones()); 
    }, [dispatch]);

    console.log(comercial)

    comercial.reverse();

    return (
        <div>
            <div>
                <h1>trabajos comerciales</h1>
            </div>
            <div className="cont-cards">
                {
                    comercial && comercial.map((el)=>{
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