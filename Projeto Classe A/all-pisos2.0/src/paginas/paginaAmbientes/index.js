import React from "react";

import Topo from '../../componentes/topo/'
import Rodape from '../../componentes/rodape/'
import SecaoOrcamento from '../../componentes/secaoOrcamento/'
import SecaoContato from '../../componentes/secaoContatos/'
import SecaoBannerProjeto from "../../componentes/secaoBannerProjeto";
import SecaoAmbientes from "../../componentes/secaoAmbientes";
 
export default function PaginaAmbientes(){
    return(
        <div className="pagina-projetos">
            <Topo/>
            <SecaoBannerProjeto/>
            <SecaoAmbientes />
            <SecaoOrcamento paragrafo='FAÇA UM ORÇAMENTO COM A GENTE!'/>
            <SecaoContato/>
            <Rodape/>
        </div>
    )
}