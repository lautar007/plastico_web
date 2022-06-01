import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import { deletePortada, postPortada } from "../actions/actions";
import './Admin.css';

export default function Admin(){
    
    const dispatch = useDispatch();
    const [contraseña, setContraseña] = useState('false')
    const [entrada, setEntrada] = useState('false')

    function handleInputChange(e){
        e.preventDefault();
        setContraseña(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        setEntrada(contraseña);
        sessionStorage.name = contraseña
    }

    function nombres(){
        let nombre = ''
        if(sessionStorage.name === 'lauchita'){
            nombre = 'Lautaro Nuñez'
        }
        else if(sessionStorage.name === 'choripan'){
            nombre = 'Natalie Lopez'
        }
        else if(sessionStorage.name === 'simio'){
            nombre = 'Lautaro Robin'
        }
        return(
            <h2 className="text-contraseña">Hola {nombre}! Esta es la página de administradores</h2>
        )
    }

    //---------------------------------

    const [input, setInput] = useState({
        imagenA: '',
        imagenB: ''
    })

    function handleChange(e){
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value 
        });
        console.log(input);
    }

    function borrarPortada(e){
        e.preventDefault();
        dispatch(deletePortada());
        alert('Portada borrada, presione CONFIGURAR')
    }

    function handlePortada(e){
        e.preventDefault();
        if(input.imagenA.length > 5 && input.imagenB.length > 5){
        dispatch(postPortada(input));
        //dispatch(postPortada({imagenA: 'simito', imagenB: 'natalinch'}))
        alert('La portada se ha configurado con éxito.')
        }
        else{
            alert('Debe colocarse ambas imágenes para poder realizar la configuración.')
        }
    }

    //---------------------------------

    return(
        <div className="fondo-admin">
            {
                sessionStorage.name !== 'lauchita' && sessionStorage.name !== 'choripan' && sessionStorage.name !== 'simio'?
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
                sessionStorage.name === 'lauchita' || sessionStorage.name === 'choripan' || sessionStorage.name === 'simio' ?
                <div>
                    <div>
                        {nombres()}
                    </div>
                    <div className="cont-botonesAdmin">
                        <Link to='/aslfi234234/form'>
                        <button className="btn-form">Nueva Publicación</button>
                        </Link>
                        <Link to = '/greio237564/adminPost'>
                        <button className="btn-admin">Administrar publicaciones</button>
                        </Link>
                        <Link to = '/ewrju847205/pasantias'>
                        <button className='btn-pasSub'>Pasantías y Subscripciones</button>
                        </Link>
                    </div>  
                    <div className="cont-portada">
                        <h1>Cambiar imágenes de portada</h1>
                        <h3>Cambie las imágenes de portada para las secciones 'ART' y 'COMERCIAL' en el Home. Primero BORRE LA ENTERIOR y luego configure las nuevas portadas</h3>
                        <div className="input-portada">
                            <p>Tapa de Artsy</p>
                            <input
                            placeholder="URL de la imagen"
                            name="imagenA"
                            onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className="input-portada">
                            <p>Tapa de Comercial</p>
                            <input
                            placeholder="URL de la imagen"
                            name="imagenB"
                            onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <button className="btn-portada" onClick={(e)=> borrarPortada(e)}>Borrar Portada</button>
                        <button className="btn-portada" onClick={(e)=> handlePortada(e)}>Configurar</button>
                    </div>      
                </div>
                :
                null
            }
        </div>
    )
}