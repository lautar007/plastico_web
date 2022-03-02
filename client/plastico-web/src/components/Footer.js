import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postCandidatos } from "../actions/actions";


export default function Footer(){

    const dispatch = useDispatch();

    const [input, setInput] = useState({
        nombre: '',
        edad: 0,
        mail: '',
        telefono: 'no tiene',
        newsletter: false,
        pasantia: false
    })

    function handleChange(e){
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value,
            newsletter: true
        })
        console.log(input);
    }

    function handleSubmit(e){
        e.preventDefault();
      if(input.nombre.length > 2 && input.mail.length > 5){
        dispatch(postCandidatos(input));
        alert('Gracias por subscribirte, serás informado de las últimas noticias')
        }
        else {
            alert('Debe rellenar los campos con su información para poder recibir las últimas noticias')
        }
    }
    

    return(
        <div id = 'cont-Footer'>
            <div id="cont-redes">
                <h2>Seguinos:</h2>
                <div id="cont-ig">
                    <img id="logo-ig" src="https://i.pinimg.com/564x/2f/7f/90/2f7f90949b9a9cd2cc221adb39d39b7d.jpg"/>
                    <a href='https://www.instagram.com/plastico.estudio/?hl=es'>@plastico.estudio</a>
                </div>

            </div>
            <div id="cont-newsletter">
                <h2>Subscribite al Newsletter</h2>
                <h4>Dejanos tu e-mail para enviarte nuestras últimas noticias</h4>
                <p>Nombre:</p>
                <input
                id="news-nombre"
                name = 'nombre'
                onChange={(e)=> handleChange(e)}
                />
                <p>E-mail:</p>
                <input
                name ='mail'
                onChange={(e)=> handleChange(e)}
                />
                <button className="btn-contraseña" onClick={(e)=> handleSubmit(e)}>Enviar</button>
            </div>
            <div id="cont-pasantia">
                <h2>Trabaja con nosotrxs.</h2>
            </div>
        </div>
    )
}