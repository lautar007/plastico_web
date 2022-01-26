import React from "react";
import { Link } from "react-router-dom";
import './LandingPage.css'

export default function LandingPage(){
    return (
        <div className="estructure">
            <div className="artistic">
                <Link className="link" to='/artistic'>
                <h1 className="artistic-tit">Artistic</h1>
                </Link>
            </div>
            <div className="comercial">
                <Link className="link" to='/comercial'>
                <h1 className="comercial-tit">Comercial</h1>
                </Link>
            </div>
        </div>
    )
}