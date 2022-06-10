
    import React from "react";
    import { Link, useParams } from "react-router-dom";
    import { useDispatch, useSelector } from "react-redux";
    import { getPublicacion } from "../actions/actions";
    import { useEffect } from "react";
    import logo from '../media/LOGO.png';
    import './Galeria.css';
    
    export default function Galeria () {

      const publi = {
        titulo: 'Título de prueba',
        contenido: 'lorem ipsum jajajaja que loco que estoy.Esto está hardcodeado',
        imagen: 'https://i.pinimg.com/564x/34/bd/76/34bd76749c88dcd5b36c568b32f1076d.jpg',
        categoria: 'comercial',
        galeria: ["https://i.pinimg.com/564x/ec/fc/a7/ecfca70058a23f29b39b84f1fcb2658f.jpg", "https://i.pinimg.com/564x/9a/02/0f/9a020fd8660b3487dd7d2e9d61b38105.jpg", "https://i.pinimg.com/564x/22/f0/33/22f033166f1cf1a2efc949856d2ba294.jpg", "https://i.pinimg.com/564x/de/a5/ae/dea5ae05bf74be1be49019ba177caa18.jpg", "https://i.pinimg.com/564x/7f/f5/17/7ff517368e336ff54a55d5b831b1039f.jpg", "https://i.pinimg.com/564x/64/07/ce/6407ce327070682ecf56bda39175f8c5.jpg", 'https://www.youtube.com/watch?v=CeKMHBOU6Jk&ab_channel=JimmyKimmelLive'],
        subtitulo: 'Más pics de la Yeni Lorens, nunca supe como se escribe.'
      }
        
        let {id} = useParams(); 
       
        const gal = publi.galeria
        console.log(gal)
    
        return(
            <div>
                <h1>Galería de imágenes</h1>
                <Link to = {'/artistic/' + id} >
                <button className="btn-contraseña">Volver</button>
                </Link>
                <div className="cont-gal">
    
                    <ul id = 'galeria-M'>
                      <li>
                          <a href ='#0'><img id= 'img-blog' src={gal[0]? gal[0]: logo}/></a>
                      </li>
                      <li>
                          <a href="#1"><img id= 'img-blog' src={gal[1]? gal[1]: logo}/></a>
                      </li>
                      <li>
                          <a href="#2"><img id= 'img-blog' src={gal[2]? gal[2]: logo}/></a>  
                      </li>
                      <li>
                          <a href="#3"><img id= 'img-blog' src={gal[3]? gal[3]: logo}/></a>
                      </li>
                      <li>
                          <a href="#4"><img id= 'img-blog' src={gal[4]? gal[4]: logo}/></a>
                      </li>
                      <li>
                          <a href="#5"><img id= 'img-blog' src={gal[5]? gal[5]: logo}/></a>
                      </li>
                    </ul>
    
                </div>

                <div className="modal" id="0">
                    <div className="imagen-modal">
                        <a className="arrow" href="#5"> ⇐</a>
                        <img src={gal[0]? gal[0]: logo}/>
                        <a className="arrow" href="#1"> ⇒</a>
                    </div>
                    <a className="cerrar-modal" href="">X</a>
                </div>

                <div className="modal" id="1">
                    <div className="imagen-modal">
                        <a className="arrow" href="#0"> ⇐</a>
                        <img src={gal[1]? gal[1]: logo}/>
                        <a className="arrow" href="#2"> ⇒</a>
                    </div>
                    <a className="cerrar-modal" href="">X</a>
                </div>

                <div className="modal" id="2">
                    <div className="imagen-modal">
                        <a className="arrow" href="#1"> ⇐</a>
                        <img src={gal[2]? gal[2]: logo}/>
                        <a className="arrow" href="#3"> ⇒</a>
                    </div>
                    <a className="cerrar-modal" href="">X</a>
                </div>

                <div className="modal" id="3">
                    <div className="imagen-modal">
                        <a className="arrow" href="#2"> ⇐</a>
                        <img src={gal[3]? gal[3]: logo}/>
                        <a className="arrow" href="#4"> ⇒</a>
                    </div>
                    <a className="cerrar-modal" href="">X</a>
                </div>

                <div className="modal" id="4">
                    <div className="imagen-modal">
                        <a className="arrow" href="#3"> ⇐</a>
                        <img src={gal[4]? gal[4]: logo}/>
                        <a className="arrow" href="#5"> ⇒</a>
                    </div>
                    <a className="cerrar-modal" href="">X</a>
                </div>

                <div className="modal" id="5">
                    <div className="imagen-modal">
                        <a className="arrow" href="#4"> ⇐</a>
                        <img src={gal[5]? gal[5]: logo}/>
                        <a className="arrow" href="#0"> ⇒</a>
                    </div>
                    <a className="cerrar-modal" href="">X</a>
                </div>

            </div>
        )
    }
   
  
    