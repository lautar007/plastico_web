import React from "react";
import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPublicaciones } from "../actions/actions";
import Card from "./Card";
import './Artistic.css';
import { Link } from "react-router-dom";
import Lupa from '../media/Lupa.png';

export default function Artistic(){

    const dispatch = useDispatch();
    const artistic = useSelector((state)=>state.Artistico);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState(false);

    useEffect(()=>{
        dispatch(getPublicaciones()); 
    }, [dispatch]);

    console.log(artistic)

    var art = artistic.reverse();

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
                <h1>trabajos artísticos</h1>
            </div>
            <div  className="searchBar1">
                    <button onClick={e => handleFilter(e)}>Filtros</button>
                    <Link to={'/busqueda/' + search}>
                    <img className="searchLupa" src={Lupa}/> 
                    </Link>
                    <input 
                    placeholder="Buscar por Nombre o Servicio"
                    onChange={(e) => {handleSearchBar(e)}}
                    />
            </div>
            <div>
           {
               filter === true ?
               <div className="sub-filtro">
               <ul>
                   <Link className="link" to='/busqueda/estilismo'>
                      <li>Estilismo</li>
                   </Link>
                   <Link className="link" to='/busqueda/direccion de arte'>
                      <li>Dirección de Arte</li>
                   </Link>
                   <Link className="link" to='/busqueda/produccion fotografica y de video'>
                      <li>Producción Fotográfica y de Video</li>
                   </Link>
                   <Link className="link" to='/busqueda/postproduccion digital'>
                      <li>Postproducción Digital</li>
                   </Link>
                   <Link className="link" to='/busqueda/direccion creativa'>
                      <li>Dirección Creativa</li>
                   </Link>
               </ul>
               </div>
               :
               null
           }
           </div>
            <div className="cont-cards">
                {
                    art && art.map((el)=>{
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
        </div>
    )
}