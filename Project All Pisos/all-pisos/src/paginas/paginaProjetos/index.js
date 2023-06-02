import React from "react";

import Topo from '../../componentes/topo/'
import Rodape from '../../componentes/rodape/'
import SecaoOrcamento from '../../componentes/secaoOrcamento/'
import SecaoContato from '../../componentes/secaoContatos/'
import SecaoBannerProjeto from "../../componentes/secaoBannerProjeto";
import SecaoCarrossel from "../../componentes/secaoCarrossel";
 
export default function paginaProjetos(){
    return(
        <div className="pagina-projetos">
            <Topo/>
            <SecaoBannerProjeto/>
            <SecaoCarrossel/>
            <SecaoOrcamento paragrafo='FAÇA UM ORÇAMENTO COM A GENTE!'/>
            <SecaoContato/>
            <Rodape/>
        </div>
    )
}