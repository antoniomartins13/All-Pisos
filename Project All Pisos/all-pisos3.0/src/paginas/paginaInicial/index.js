import React from "react";

import Topo from '../../componentes/topo/'
import Rodape from '../../componentes/rodape/'
import SecaoBanner from "../../componentes/secaoBanner";
import SecaoOrcamento from "../../componentes/secaoOrcamento";
import SecaoProdutos from "../../componentes/secaoProdutos";
import SecaoInspiracoes from "../../componentes/secaoInspiracoes";
import SecaoSobre from "../../componentes/secaoSobre";
import SecaoContato from "../../componentes/secaoContatos";
import SecaoNossoInstagram from "../../componentes/secaoNossoInstagram";

export default function paginaInicial(){
    return(
        <div className="pagina-inicial">
            <Topo />
            <SecaoBanner/>
            <SecaoOrcamento paragrafo='FAÇA UM ORÇAMENTO COM A GENTE!'/>
            <SecaoProdutos/>
            <SecaoInspiracoes />
            <SecaoSobre/>
            <SecaoOrcamento paragrafo='VENHA FAZER UM ORÇAMENTO COM A GENTE'/>
            <SecaoContato instaAtivo={false} />
            <SecaoNossoInstagram />
            <SecaoOrcamento paragrafo='FAÇA UM ORÇAMENTO AQUI' />
            <Rodape />
        </div>
    )
}