import React from "react";

import Topo from '../../componentes/topo/'
import Rodape from '../../componentes/rodape/'
import SecaoBanner from "../../componentes/secaoBanner";
import SecaoOrcamento from "../../componentes/secaoOrcamento";
import SecaoProdutos from "../../componentes/secaoProdutos";
import SecaoSobre from "../../componentes/secaoSobre";
import SecaoContato from "../../componentes/secaoContatos";


export default function paginaInicial(){
    return(
        <div className="pagina-inicial">
            <Topo />
            <SecaoBanner/>
            <SecaoOrcamento paragrafo='FAÇA UM ORÇAMENTO COM A GENTE!'/>
            <SecaoProdutos/>
            <SecaoSobre/>
            <SecaoOrcamento paragrafo='VENHA FAZER UM ORÇAMENTO COM A GENTE'/>
            <SecaoContato/>
            <Rodape />
        </div>
    )
}