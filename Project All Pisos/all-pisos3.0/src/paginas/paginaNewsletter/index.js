import React from 'react'

import Topo from '../../componentes/topo'
import Rodape from '../../componentes/rodape'
import SecaoContato from '../../componentes/secaoContatos'
import SecaoOrcamento from '../../componentes/secaoOrcamento'
import SecaoInscricaoNewsletter from '../../componentes/secaoInscricaoNewsletter'


function PaginaNewsletter() {
  return (
      <div>
        <Topo />
        <SecaoInscricaoNewsletter />
        <SecaoOrcamento paragrafo='FAÇA UM ORÇAMENTO COM A GENTE!' />
        <SecaoContato/>
        <Rodape/>
    </div>
  )
}

export default PaginaNewsletter