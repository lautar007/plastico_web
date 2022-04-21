import React from "react";
import { Link } from "react-router-dom";
import './LandingPage.css';
import { useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPortada } from "../actions/actions";
import { useEffect } from "react";
import Lupa from '../media/Lupa.png';

export default function Home(){

    const dispatch = useDispatch();
    const [menu, setMenu] = useState(false);
    const [search, setSearch] = useState('');

    const portadas = useSelector((state)=> state.Portada);

    useEffect(()=>{
        dispatch(getPortada()); 
    }, [dispatch]);

    console.log(portadas);

    function portadaProviderA(){
        if(portadas.length > 0){
            let portada = portadas[0]
            let portadaA = portada.imagenA;

            return portadaA
        }
        else return null
    }

    const portadaArt = portadaProviderA();
    console.log(portadaArt);

    function portadaProviderB(){
        if(portadas.length > 0){
            let portada = portadas[0]
            let portadaB = portada.imagenB;

            return portadaB
        }
        else return null
    }

    const portadaCom = portadaProviderB();
    console.log(portadaCom);


    function handleMenu (e){
        setMenu(!menu);
    }

    function handleSearchBar(e){
        e.preventDefault();
        setSearch(e.target.value);
        console.log(search);
    }

    return (
        <div>
            <div className="estructure">
                <div className="artistic" style={{backgroundImage: `url(${portadaArt})`}}>
                <Link className="logo" to= '/'>
                    <img className="logo1" src={"https://i.pinimg.com/564x/a7/34/46/a73446345a4c441921f6d44eb270bcfd.jpg"}></img>
                </Link>
                    <Link className="link" to='/artistic'>
                    <h1 className="artistic-tit">ART</h1>
                    </Link>
                </div>
                <div className="comercial" style={{backgroundImage: `url(${portadaCom})`}}>
                    <Link className="link" to='/comercial'>
                    <h1 className="comercial-tit">Comercial</h1>
                    </Link>
                    <img onClick = {(e)=> handleMenu(e)} className="menu" src="https://i.pinimg.com/564x/de/b5/90/deb590f49a8249aedd5cf8b4411250be.jpg"></img>
                </div>
                <div  className="searchBar">
                    <Link to={'/busqueda/' + search}>
                    <img className="searchLupa" src={Lupa}/> 
                    </Link>
                    <input 
                    placeholder="Buscar por Nombre o Servicio"
                    onChange={(e) => {handleSearchBar(e)}}
                    />
                </div>
            </div>
            <div>
                {
                    menu === true ?
                    <div className="content-menu">
                        <Link to='/manifest'>
                        <button>Manifiesto</button>
                        </Link>
                        <Link to='/blog'>
                        <button>Blog</button>
                        </Link>
                        <Link to='/staff'>
                        <button>Quienes Somos</button>
                        </Link>
                    </div>
                    :
                    null    
                }
            </div>
        </div>
    )
}