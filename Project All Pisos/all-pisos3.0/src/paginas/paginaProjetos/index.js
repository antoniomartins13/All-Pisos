import React from "react";

import Topo from '../../componentes/topo/'
import Rodape from '../../componentes/rodape/'
import SecaoOrcamento from '../../componentes/secaoOrcamento/'
import SecaoContato from '../../componentes/secaoContatos/'
import SecaoBannerProjeto from "../../componentes/secaoBannerProjeto";
import SecaoInspiracoesContainer from "../../componentes/secaoInspiracoesContainer";
 
export default function paginaProjetos(){
    return(
        <div className="pagina-projetos">
            <Topo/>
            <SecaoBannerProjeto/>
            <SecaoInspiracoesContainer />
            <SecaoOrcamento paragrafo='FAÇA UM ORÇAMENTO COM A GENTE!'/>
            <SecaoContato/>
            <Rodape/>
        </div>
    )
}