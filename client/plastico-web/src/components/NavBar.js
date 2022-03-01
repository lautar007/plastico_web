import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import './NavBar.css'

export default function NavBar () {

    const [menu, setMenu] = useState(false);

    function handleMenu (e){
        e.preventDefault();
        setMenu(!menu);
        console.log(menu);
    }

    return (
        <div className="NB-fondo">
            <div className="cont-logo">
               <div className="logo-titulo"> 
                <Link className="logo" to= '/home'>
                    <img className="logo" src="https://i.pinimg.com/564x/a7/34/46/a73446345a4c441921f6d44eb270bcfd.jpg"></img>
                </Link>
                </div>
                <div>
                <img onClick = {(e)=> handleMenu(e)} className="menu1" src="https://i.pinimg.com/564x/de/b5/90/deb590f49a8249aedd5cf8b4411250be.jpg"></img>
                </div>
            </div>
            <div>
                {
                    menu === true ?
                    <div className="content-menu1">
                        <Link to='/manifest'>
                        <button>Manifiesto</button>
                        </Link>
                        <Link to='/blog'>
                        <button>Blog</button>
                        </Link>
                        <Link to='/admin'>
                        <button>Administración</button>
                        </Link>
                    </div>
                    :
                    null    
                }
            </div>
        </div>
    )
}