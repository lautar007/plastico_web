import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import './Admin.css';
import ToDo from "./ToDo";

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
            <h2 className="text-contraseña">Hola {nombre}! Esta es la página de administradores</h2>
        )
    }

    return(
        <div className="fondo-admin">
            {
                entrada !== 'lauchita' && entrada !== 'choripan' && entrada !== 'simio'?
                <div className="cont-img-input">
                    <div className="contraseña">
                        <h2 className="admins">Administradores</h2> 
                    </div>
                    <div className="cont-contraseña">
                        <h3 className="text-contraseña">Coloque la contraseña:</h3>
                        <input
                        onChange={(e) => handleInputChange(e)}
                        type='text'
                        placeholder="contraseña aquí"
                        /> 
                        <button className="btn-contraseña" onClick={(e) => handleSubmit(e)}>Entrar</button>
                        {
                        entrada !== 'false' && entrada !== 'lauchita' && entrada !== 'choripan' && entrada !== 'simio' ?
                        <h3 className="text-contraseña">Constraseña incorrecta, vuelva a intentar</h3>
                        :
                        null
                        }
                    </div>
                </div>
                :
                null
            }
            {
                entrada === 'lauchita' || entrada === 'choripan' || entrada === 'simio' ?
                <div>
                    <div>
                        {nombres()}
                    </div>
                    <div>
                        <ToDo/>
                    </div>    
                </div>
                :
                null
            }
        </div>
    )
}