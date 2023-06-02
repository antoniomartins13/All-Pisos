import React from "react";
import './style.css'

export default function SecaoOrcamento(props){
    return(
        <section className="secao-orcamento">
            <div className="limitar-largura texto-orcamento">
                <p>{props.paragrafo}</p>

            <a className="btn-wp" href="https://api.whatsapp.com/send?phone=557988075424&text=Olá,%20quero%20falar%20com%20um%20vendedor" target="_blank" title="Fazer orçamento" rel="noreferrer">
                FAZER ORÇAMENTO<img src="assets/wp.png" alt="Whatsapp"/>
            </a>
            </div>
        </section>
    )
}