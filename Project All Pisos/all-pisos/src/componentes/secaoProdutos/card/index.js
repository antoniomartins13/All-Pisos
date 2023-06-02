import React from "react";
import './style.css'

export default function Card({props}){
    return( 
        <div className="card">
            <h3>{props.nome}</h3>
            <img src={props.imagem} title={props.nome} alt={props.nome}/>
        </div>
    )
}