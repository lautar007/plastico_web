import React from "react";
import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPublicaciones } from "../actions/actions";
import Card from "./Card";
import './Artistic.css';
import { Link } from "react-router-dom";
import Lupa from '../media/Lupa.png';
const publicaciones = require('../BDT/publics')


export default function Comercial(){

    const dispatch = useDispatch();
    const comercial = useSelector((state)=>state.Comercial); //DESBLOQUEAR CUANDO HAYA BACKEND
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState(false);

    useEffect(()=>{
        dispatch(getPublicaciones()); 
    }, [dispatch]);


    function handleSearchBar(e){
        e.preventDefault();
        setSearch(e.target.value);
        console.log(search);
    }

    function handleFilter(e){
        e.preventDefault();
        setFilter(!filter);
    }

    return (
        <div>
            <div>
                <h1>trabajos comerciales</h1>
            </div>
            <div>
                <div className="searchBar1">              
                    <Link to={'/busqueda/' + search}>
                        <div className="searchLupa">
                            <img src={Lupa}/>
                        </div> 
                    </Link>
                    <input 
                    placeholder="Buscar por Nombre o Servicio"
                    onChange={(e) => {handleSearchBar(e)}}
                    />
                </div>
                <button className="filtros-btn" onClick={e => handleFilter(e)}>Filtros</button>
            </div>
            <div className="cont-cards">
                {
                    comercial && comercial.map((el)=>{
                        return(
                            <div key={el.id}>
                                <Card
                                titulo={el.titulo}
                                imagen={el.imagen}
                                id={el.id}
                                subtitulo={el.subtitulo}
                                />
                            </div>
                        )
                    })
                }
            </div>
            <div>
            {
               filter === true ?
               <div className="sub-filtro">
                   <Link className="link" to='/busqueda/foto producto'>
                      <li>Foto Producto</li>
                   </Link>
                   <Link className="link" to='/busqueda/diseño grafico & branding'>
                      <li>Diseño Gráfico & Branding</li>
                   </Link>
                   <Link className="link" to='/busqueda/motion grafics'>
                      <li>Postproducción Digital / Motion Graphics</li>
                   </Link>
                   <Link className="link" to='/busqueda/motion grafics'>
                      <li>Institucional</li>
                   </Link>
               </div>
               :
               null
           }
           <hr/>
           </div>
        </div>
    )
}