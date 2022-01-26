import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import './Admin.css'

export default function Admin(){

    const [contraseña, setContraseña] = useState('false')
    const [entrada, setEntrada] = useState('false')

    function handleInputChange(e){
        e.preventDefault();
        setContraseña(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        setEntrada(contraseña);
    }

    function nombres(){
        let nombre = ''
        if(contraseña === 'lauchita'){
            nombre = 'Lautaro Nuñez'
        }
        else if(contraseña === 'choripan'){
            nombre = 'Natalie Lopez'
        }
        else if(contraseña === 'simio'){
            nombre = 'Lautaro Robin'
        }
        return(
            <h2>Hola {nombre}! Esta es la página de administradores</h2>
        )
    }

    return(
        <div className="fondo-admin">
            {
                entrada !== 'lauchita' && entrada !== 'choripan' && entrada !== 'simio'?
                <div>
                    <h3>Coloque la contraseña:</h3>
                    <input
                    onChange={(e) => handleInputChange(e)}
                    type='text'
                    placeholder="contraseña aquí"
                    /> 
                    <button onClick={(e) => handleSubmit(e)}>Entrar</button>
                </div>
                :
                null
            }
            {
                entrada !== 'false' && entrada !== 'lauchita' && entrada !== 'choripan' && entrada !== 'simio' ?
                <h2>Constraseña incorrecta, vuelva a intentar</h2>
                :
                null
            }
            {
                entrada === 'lauchita' || entrada === 'choripan' || entrada === 'simio' ?
                <div>
                    {nombres()}
                </div>
                :
                null
            }
        </div>
    )
}