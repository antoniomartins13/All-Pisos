import React from "react";
import './style.css'
import { Link } from "react-router-dom";

export default function SecaoInspiracoesContainer(){
    return(
        <section className="inspiracao-container limitar-largura">
            <h2>INSPIRAÇÃO</h2>
            <div className="secao-inspiracao-container limitar-largura">

                <a  href='/inspiracoes/ambientes?filtro=fachada' className="card-inspiracao">
                    <p>FACHADAS</p>
                </a>

                <a href='/inspiracoes/ambientes?filtro=banheiro' className="card-inspiracao">
                    <p>BANHEIROS</p>
                </a>

                <Link to='/inspiracoes/ambientes' className="btn-ver-todos">
                    <p>VER<br/> TODOS <span className="seta">&gt;</span></p>
                </Link>

                <a href='/inspiracoes/ambientes?filtro=gourmet' className="card-inspiracao">
                    <p>ÁREAS GOURMET</p>
                </a>

                <a href='/inspiracoes/ambientes?filtro=hall' className="card-inspiracao">
                    <p>Hall de Entrada</p>
                </a>

                <a href='/inspiracoes/ambientes?filtro=piscina' className="card-inspiracao">
                    <p>PISCINAS</p>
                </a>
            </div>
        </section>
    )
}