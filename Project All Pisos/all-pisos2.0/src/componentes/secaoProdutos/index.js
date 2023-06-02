import React, { useState, useEffect } from "react";
import "./style.css";
import Card from "./card/index.js";
import cards from "./card/dados.js";

export default function SecaoProdutos() {
  const [verMais, setVerMais] = useState(false);
  const [larguraJanela, setLarguraJanela] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setLarguraJanela(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function trocarVerMais() {
    setVerMais(!verMais);
  }

  const cartoesExibidos = verMais ? cards.length : larguraJanela <= 650 ? 6 : cards.length;
  const cartoes = cards.slice(0, cartoesExibidos);

  return (
    <section className="secao-produtos" id="produtos">
      <article className="titulo-paragrafo">
        <h2>NOSSOS PRODUTOS</h2>
        <p>Conheça os produtos que trabalhamos em nossa loja</p>
      </article>

      <div className="limitar-largura cards">
        {cartoes.map((produto, index) => (
          <Card key={index} props={produto} />
        ))}
      </div>

      {larguraJanela <= 650 && (
        <button className="btn-ver-mais" onClick={trocarVerMais}>
          {verMais ? "VER MENOS" : "VER MAIS"}
        </button>
      )}
    </section>
  );
}
