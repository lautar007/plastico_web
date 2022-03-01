import React from "react";
import { Link } from "react-router-dom";
import './LandingPage.css'
import { useState } from "react";

export default function Home(){

    const [menu, setMenu] = useState(false);

    function handleMenu (e){
        e.preventDefault();
        setMenu(!menu);
        console.log(menu);
    }

    return (
        <div>
            <div className="estructure">
                <div className="artistic">
                <Link className="logo" to= '/'>
                    <img className="logo1" src="https://i.pinimg.com/564x/a7/34/46/a73446345a4c441921f6d44eb270bcfd.jpg"></img>
                </Link>
                    <Link className="link" to='/artistic'>
                    <h1 className="artistic-tit">Artsy</h1>
                    </Link>
                </div>
                <div className="comercial">
                    <Link className="link" to='/comercial'>
                    <h1 className="comercial-tit">Comercial</h1>
                    </Link>
                    <img onClick = {(e)=> handleMenu(e)} className="menu" src="https://i.pinimg.com/564x/de/b5/90/deb590f49a8249aedd5cf8b4411250be.jpg"></img>
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