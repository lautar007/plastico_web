import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPublicaciones } from "../actions/actions";

export default function Busqueda (){

    const {search} = useParams();

    const dispatch = useDispatch();
    const artistic = useSelector((state)=>state.Artistico);
    const comercial = useSelector((state)=>state.Comercial);

    useEffect(()=>{
        dispatch(getPublicaciones()); 
    }, [dispatch]);

    console.log(artistic);
    console.log(comercial);

    return (
        <div>
            <h1>Estos son los resutlados para: {`"` + search + `"`}</h1>
        </div>
    )
}