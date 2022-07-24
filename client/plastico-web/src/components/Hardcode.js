
import React from 'react';
import './Pasantia.css';
import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePasante, getMensajes, getPasantes } from '../actions/actions';

export default function Pasantias (){

    const dispatch = useDispatch();
    const pasantes = useSelector((state)=> state.Candidatos);
    const mensajes = [
        {
          "id": 2,
          "nombre": "Paola Marcela",
          "mail": "laPaolitaDelBajoFlores@gmail.com",
          "telefono": "011-152960332",
          "mensaje": "Por qué estas llorando ahora? TE DIJE QUE NO VOLVÁ Y VO VA Y VOLVÉ, VA Y VOLVÉ"
        },
        {
          "id": 3,
          "nombre": "La Chelita de Caseros",
          "mail": "TuChelita-deCaseros@yahoo.com.ar",
          "telefono": "011-15267266",
          "mensaje": "Hola mi amooorrr, que pasa acá? Quiero hacer una sesión de fotitos hot pa subir al onlifán. Ahora cobro en dólares mami, preguntale a tu marido...\nLes dejo mi onlifán: /laChelitaSexxx. Effeenmé y faveen con glam pls <3"
        }
      ];

  
    
    return(
        <div>
            <h1 className='tit-pas'>Mensajería</h1>
            <hr/>
            <div className='cont-newsSub'>
                <h2>Hay {mensajes.length} mensajes:</h2>
                {
                    mensajes && mensajes.map(el=>{
                        return(
                            <div>
                                <div key={Math.random()} className='sub-list2'>
                                    <div className='item'>
                                        <h3>Nombre:</h3>
                                        <p>{el.nombre}</p>
                                    </div>
                                    <div className='item'>
                                        <h3>E-mail:</h3>
                                        <p>{el.mail}</p>
                                    </div>
                                    <div className='item'>
                                        <h3>Teléfono:</h3>
                                        <p>{el.telefono}</p>
                                    </div>
                                    <button name={el.nombre} >Eliminar</button>
                                </div>
                                <div className='item2'>
                                    <h3>Mensaje:</h3>
                                    <p>{el.mensaje}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    )
}