import React, { useEffect, useState } from "react";
import './style.css'
import MapsIframe from "./mapsIframe";

export default function SecaoContato(props){
    const [nossoInstagram, setNossoInstagram] = useState(true);

    useEffect(() => {
        if(props.instaAtivo !== undefined){
            setNossoInstagram(props.instaAtivo)
            
            const secaoContatos = document.querySelector('.contatos')
            secaoContatos.style.justifyContent = 'center'
        }
    },[props.instaAtivo, setNossoInstagram])

    return(
        <section className="secao-contato">
            <article className="titulo-paragrafo">
                <h2>CONTATO</h2>
            </article>
            <MapsIframe embedId="?pb=!1m18!1m12!1m3!1d489.67639051610666!2d-37.0664459298472!3d-10.932284611435612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab11cd4fa297f%3A0xf3e46a91e8a1d7ad!2sALL%20PISOS%20ACABAMENTO!5e0!3m2!1spt-BR!2sbr!4v1683226350076!5m2!1spt-BR!2sbr"/>
            <div className="contatos">
                {nossoInstagram && 
                <div className="redes-sociais">
                    <h3>NOSSO INSTAGRAM</h3>
                    <a href="https://www.instagram.com/allpisosacabamentos/" target="_blank" rel="noreferrer">
                        <img src="/assets/ig.png" title="Nosso instagram" alt="Instagram"/>
                    </a>
                </div>}
                <div className="contato-direto">
                    <h3>CONTATO DIRETO</h3>
                    <div>
                        <img src="/assets/email.png" alt="email"/>
                        <p>allpisos.revestimentos@gmail.com</p>
                    </div>
                    <div>
                        <img src="/assets/telefone.png" alt="email"/>
                        <p>(79) 98807-5424</p>
                    </div>
                </div>
            </div>
        </section>
    )
}