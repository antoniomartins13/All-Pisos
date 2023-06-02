import React from "react";
import { Link } from "react-router-dom";
import './style.css'

export default function Topo(){

    return(
        <header>
            <div className="limitar-largura topo" id="topo">
                <Link to='/'>
                    <img src="assets/logo.png" alt="logo-All-Pisos" title="Logo"/>
                </Link>

                <nav>
                    <Link to='/' className='topo-link'>HOME</Link>
                    <Link to='/projetos' className='topo-link'>INSPIRAÇÕES</Link>
                </nav>
            </div>
        </header>
    );
}