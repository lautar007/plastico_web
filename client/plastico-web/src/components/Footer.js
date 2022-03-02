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

    const [ventana, setVentana] = useState(false) 

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
        alert('Gracias por subscribirte, serás informado de las últimas noticias');
        setInput({
            nombre: '',
            edad: 0,
            mail: '',
            telefono: 'no tiene',
            newsletter: false,
            pasantia: false
        })
        }
        else {
            alert('Debe rellenar los campos con su información para poder recibir las últimas noticias')
        }
    }

    function handlePasantia(e){
        e.preventDefault();
        setVentana(!ventana);
        console.log(ventana);
    }

    function handlePas(e){
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value,
            pasantia: true,
        })
        console.log(input);
    }

    function handleSubmitPas(e){
        e.preventDefault();
      if(input.nombre.length > 2 && input.mail.length > 5 && input.edad > 0){
        dispatch(postCandidatos(input));
        alert('Gracias, nos pondremos en contacto pronto.');
        setInput({
            nombre: '',
            edad: 0,
            mail: '',
            telefono: 'no tiene',
            newsletter: false,
            pasantia: false
        })
        }
        else {
            alert('Debe rellenar los campos con su información para que podamos contactarle')
        }
    }
    

    return(
        <div>
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
                  <p>Nombre Completo:</p>
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
                  <button onClick={(e)=> handlePasantia(e)}>Trabaja con nosotrxs.</button>
                  <p>Dejanos tus datos para colaborar en nuestras produs como pasante!</p>
              </div>
          </div>
          <hr/>
          <p className="derechos">Este portal web fue diseñado y desarrollado por Lautaro Nuñez. Si quieres que desarrolle tu web, envía un email a 'kautarol@gmail.com'</p>
          <p className="derechos">Las imágenes y publicaciones de este portal web están protegidas por derechos de autor.</p>
          <p className="derechos">Plastico Estudio | Todos los derechos reservados © | 2022</p>
          <div>
              {
                  ventana === true ?
                  <div className="vent-pasantia">
                      <h2>Completa tus datos y nos contactaremos.</h2>
                      <div className="nombre-edad">
                          <p>Nombre Completo*:</p>
                          <input
                          name="nombre"
                          onChange={(e)=>handlePas(e)}
                          />
                          <p>Edad*:</p>
                          <input
                          className="p-edad"
                          name="edad"
                          type="number"
                          onChange={(e)=>handlePas(e)}
                          />
                      </div>
                      <div className="nombre-edad">
                          <p>E-mail*:</p>
                          <input
                          name="mail"
                          onChange={(e)=>handlePas(e)}
                          />
                          <p>Teléfono:</p>
                          <input
                          name="telefono"
                          onChange={(e)=>handlePas(e)}
                          />
                      </div>
                      <div className="nombre-edad">
                          <button className="enviar-pas" onClick={(e)=> handleSubmitPas(e)}>Enviar</button>
                          <button className="volver-pas" onClick={(e)=> handlePasantia(e)}>Volver</button>
                      </div>
                  </div>
                  :
                  null
              }
          </div>
          </div>
    )
}