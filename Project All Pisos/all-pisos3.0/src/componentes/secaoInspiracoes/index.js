import React from "react";
import './style.css'

export default function SecaoInspiracoes(){
    return(
        <section className="limita-largura secao-inspiracao">
            <div className="titulo-paragrafo">
                <h2>BUSQUE INSPIRAÇÕES</h2>
            </div>

            <div className="fotos-inspiracao">
                <a href='/inspiracoes/ambientes?filtro=fachada' className="foto-inspiracao">                  
                    <p className="legenda-foto-inspiracao">FACHADAS</p>
                </a>

                <a href='/inspiracoes/ambientes?filtro=gourmet' className="foto-inspiracao">
                    <p className="legenda-foto-inspiracao">ÁREAS GOURMET</p>
                </a>

                <a href='/inspiracoes/ambientes?filtro=banheiro' className="foto-inspiracao">                 
                    <p className="legenda-foto-inspiracao">BANHEIROS</p>
                </a>

                <a href='/inspiracoes/ambientes?filtro=piscina' className="foto-inspiracao">
                    <p className="legenda-foto-inspiracao">PISCINAS</p>
                </a>
            </div>

            <a href='/inspiracoes' className="btn-galeria">
                VER GALERIA
            </a>
        </section>
    )
}