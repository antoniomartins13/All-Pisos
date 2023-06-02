import React from "react";
import './style.css'

export default function SecaoSobre(){
    return(
        <section className="secao-sobre" id="sobre">
            <article className="sobre-texto">
                <h2>SOBRE NÓS</h2>
                <span>SAIA DO LUGAR COMUM VENHA PARA ALL PISOS!</span>
                <p className="sobre-texto">
                    Nossa boutique foi fundada em 2016, desde então nós prezamos pela qualidade e o bom atendimento ao cliente.
                </p>
                <p className="sobre-texo">
                    Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para realizar a sua obra.
                </p>
            </article>
        </section>
    )
}