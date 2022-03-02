import React from 'react';
import './Pasantia.css';
import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePasante, getPasantes } from '../actions/actions';

export default function Pasantias (){

    const dispatch = useDispatch();
    const pasantes = useSelector((state)=> state.Candidatos);

    useEffect(()=>{
        dispatch(getPasantes()); 
    }, [dispatch]);

    console.log(pasantes);

    const subs = pasantes.filter((pas) => pas.newsletter === true); 
    console.log(subs);

    const pas = pasantes.filter((pas)=> pas.pasantia === true);
    console.log(pas);

    function handleDelete(e){
        e.preventDefault();
        dispatch(deletePasante(e.target.name));
        window.location.reload();
    }
    
    return(
        <div>
            <h1 className='tit-pas'>Lista de pasantes y subscriptores</h1>
            <hr/>
            <div className='cont-newsSub'>
                <h2>Subscriptores al newsletter</h2>
                {
                    subs && subs.map(el=>{
                        return(
                            <div key={Math.random()} className='sub-list'>
                                <div className='item'>
                                    <h3>Nombre:</h3>
                                    <p>{el.nombre}</p>
                                </div>
                                <div className='item'>
                                    <h3>E-mail:</h3>
                                    <p>{el.mail}</p>
                                </div>
                                <button name={el.nombre} onClick={(e)=> handleDelete(e)}>Eliminar</button>
                            </div>
                        )
                    })
                }
            </div>
            <hr/>
            <div className='cont-pasantes'>
                <h2>Candidatos a pasantías</h2>
                {
                    pas && pas.map(el=>{
                        return(
                            <div key={Math.random()} className= 'sub-list2'>
                                <div className='item'>
                                    <h3>Nombre:</h3>
                                    <p>{el.nombre}</p>
                                </div>
                                <div className='item'>
                                    <h3>Edad:</h3>
                                    <p>{el.edad}</p>
                                </div>
                                <div className='item'>
                                    <h3>Teléfono:</h3>
                                    <p>{el.telefono}</p>
                                </div>
                                <div className='item'>
                                    <h3>E-mail:</h3>
                                    <p>{el.mail}</p>
                                </div>
                                <button name={el.nombre} onClick={(e)=> handleDelete(e)}>Eliminar</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}