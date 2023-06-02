import React from "react";
import './style.css'

import cards from "./card/dados.js";
import Card from "./card/index.js";

export default function SecaoProdutos(){ 
    
    return(
        <section className="secao-produtos" id="produtos">
            <article className="titulo-paragrafo">
                <h2>NOSSOS PRODUTOS</h2>
                <p>Conheça os produtos que trabalhamos em nossa loja</p>
            </article>

            <div className="limitar-largura cards">
                {cards.map((item, index) => {
                    return <Card key={index} props={item}/>
                })}
            </div>
        </section>
    )
}