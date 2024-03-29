import React from "react";
import './Footer.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postCandidatos, postMensajes } from "../actions/actions";


export default function Footer(){
    const dispatch = useDispatch();

    const [input, setInput] = useState({
        nombre: '',
        edad: 0,
        mail: '',
        telefono: 'no proporcionó',
        newsletter: false,
        pasantia: false
    })

    const [ventana, setVentana] = useState(false);
    
    //CUANDO HAYA BACKEND CAMBIAR ESTA VARIABLE A TRUE
    let backend = true;

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
        console.log('Funciona')
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
// DESDE AQUÍ SE MANEJA LA MENSAJERÍA -----------------------------------
    const [mensaje, setMensaje] = useState({
        nombre: '',
        mail: '',
        telefono: 'no proporcionó',
        mensaje: ''
    })

    function handleChangeMensajes(e){
        e.preventDefault();
        setMensaje({
            ...mensaje,
            [e.target.name]: e.target.value,
        })
        console.log(mensaje);
    }
    
    function handleSubmitMensajes (e){
        e.preventDefault();
        if(mensaje.nombre.length > 2 && mensaje.mail.length > 5 && mensaje.mensaje){
            dispatch(postMensajes(mensaje));
            alert('Gracias por el mensaje, nos pondremos en contacto pronto.');
            setMensaje({
                nombre: '',
                mail: '',
                telefono: 'no proporcionó',
                mensaje: ''
            })
        }
        else {
            alert('Debe rellenar los campos con su información y un mensaje para que podamos contactarle')
        }
    }

// HASTA AQUÍ SE MANEJA LA MENSAJERÍA ------------------------------------

    return(
        <div>
            <div className="mensajes">
                <h2>Dejanos un mensaje o consulta:</h2>
                <div className="cont-mensajes">
                  {
                    !backend ? (
                        <div className="SB-mail">
                            <h2>Mandanos un Email a plasticoestudiocreativo@gmail.com y responderemos a la brevedad.</h2>
                            <a href="mailto:plasticoestudiocreativo@gmail.com?subject=Consulta%20Desde%20la%20p%C3%A1gina%20web&body=Hola!%20Quisiera%20hacer%20una%20consulta...">
                                <button 
                                className="SBbtn-contraseña"
                                >Enviar Mail de consulta</button>
                            </a>
                        </div>
                    ):
                    (
                        <div>
                        <div>
                        <div className="mensajes-inputs">
                            <p>Nombre:</p>
                            <input
                            name = 'nombre'
                            onChange={(e)=> handleChangeMensajes(e)}
                            />
                        </div>
                        <div className="mensajes-inputs">
                            <p>Email:</p>
                              <input
                            name = 'mail'
                            onChange={(e)=> handleChangeMensajes(e)}
                            />
                        </div>
                        <div className="mensajes-inputs">
                            <p>Teléfono: (opcional)</p>
                              <input
                            name = 'telefono'
                            onChange={(e)=> handleChangeMensajes(e)}
                            />
                        </div>
                    </div>
                    <div className="mensajes-cuerpo">
                        <p>Mensaje:</p>
                        <textarea
                        id="input-mensaje"
                        name="mensaje"
                        onChange={(e)=> handleChangeMensajes(e)}
                        />
                        <button 
                        className="btn-contraseña"
                        onClick={(e)=> handleSubmitMensajes(e)}
                        >Enviar</button>
                    </div>
                    </div>
                    )
                  }
                    <hr/>
                    <div className="link-wpp">
                        <h2 className="escribinos">Escribinos</h2>
                        <a className="linkAWpp" href="https://api.whatsapp.com/send?phone=+543513257629&text=Hola%20Pl%C3%A1stico,%20quiero%20hacer%20una%20consulta:%20">
                        <img src="https://i.pinimg.com/564x/ea/ef/ca/eaefcad3d9695ae94098674193faf554.jpg" className= 'whatsapp-btn'></img>
                        </a>
                    </div>
                </div>
            </div>
            <hr/>
          <div id = 'cont-Footer'>
              <div id="cont-redes">
                  <h2>Seguinos:</h2>
                  <div id="cont-ig">
                      <img id="logo-ig" src="https://i.pinimg.com/564x/2f/7f/90/2f7f90949b9a9cd2cc221adb39d39b7d.jpg"/>
                      <a href='https://www.instagram.com/plastico.estudio/?hl=es'>@plastico.estudio</a>
                  </div>
                  <div id="cont-ig">
                      <img id="logo-ig" src="https://i.pinimg.com/564x/05/fe/ff/05feffdcf71f9c7171faa8fec852c256.jpg"/>
                      <a>plasticoestudiocreativo@gmail.com</a>
                  </div>
                  <div id="cont-ig">
                      <img id="logo-igB" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyfRA4kobPZT6hrUVOnFH4VDFfwC6S9P4L5s2OHG1YAWkhIYEKoEyaqavIe43qUuOVsmE&usqp=CAU"/>
                      <a href="https://www.behance.net/plasticoplastico">PLÁSTICO</a>
                  </div>
                  <div id="cont-ig">
                      <img id="logo-igB" src="https://i.pinimg.com/564x/15/7d/18/157d18d294a9e1810687cbba34a01118.jpg"/>
                      <a href = 'https://ar.pinterest.com/plasticoestudiocreativo/_created/'>@plasticoestudiocreativo</a>
                  </div>
                  <div id="cont-ig">
                      <img id="logo-igB" src="https://i.pinimg.com/564x/2b/e7/ce/2be7cee4fe404b8fa86d31d139fab757.jpg"/>
                      <a href = 'https://www.linkedin.com/in/pl%C3%A1stico-estudio-93a885221/'>Plastico Estudio</a>
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
                  { !backend ? (
                    <button 
                    className="SBbtn-contraseña"
                    onClick={(e) => alert('Actualmente no tenemos disponible esta funcionalidad, disculpe las molestias. Por favor, le invitamos a mandar un mail nuestro correo electrónico ante cualquier consulta. Estamos trabajando para mejorar el sitio.')}
                    >Enviar</button>
                  ):
                  (<button className="btn-contraseña" onClick={(e)=> handleSubmit(e)}>Enviar</button>)
                  }
                  
              </div>
              <hr/>
              <div id="cont-pasantia">
                {!backend ? 
                (<button
                    onClick={(e) => alert('Actualmente no tenemos disponible esta funcionalidad, disculpe las molestias. Por favor, le invitamos a mandar un mail nuestro correo electrónico ante cualquier consulta. Estamos trabajando para mejorar el sitio.')}
                >Trabaja con nosotrxs.</button>)
                :
                (<button 
                    onClick={(e)=> handlePasantia(e)}>Trabaja con nosotrxs.</button>)
                }
                <p>Dejanos tus datos si te interesa trabajar en nuestras producciones.</p>
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
                          className="inputsPasantia"
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
                          className="inputsPasantia"
                          name="mail"
                          onChange={(e)=>handlePas(e)}
                          />
                          <p>Teléfono:</p>
                          <input
                          className="inputsPasantia"
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
