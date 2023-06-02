import React, { useState } from "react";
import {AiOutlineClose} from 'react-icons/ai'

export default function ProjetoAmbiente({projeto}){
    const [projetoAtivo, setProjetoAtivo] = useState(false)
    function alterarProjetoAtivo(){
        setProjetoAtivo(!projetoAtivo)
    }

    return( 
    <div className="projeto-inspiracao" >
        <div className="projeto-inspiracao-pequeno" onClick={ alterarProjetoAtivo }>
            <img src={projeto.imagem} alt={projeto.ambiente} title={projeto.ambiente}/>
            <div>
                <h3>{projeto.ambiente}</h3>
                <p>PRODUTO: <span>{projeto.produtos}</span></p>
            </div>
        </div>

        {projetoAtivo && 
            <div className="projeto-inspiracao-grande" onDoubleClick={ alterarProjetoAtivo }>
                <div className="card-inspiracao-grande" on>
                    <img src={projeto.imagem} alt={projeto.ambiente} title={projeto.ambiente}/>

                    <div>
                        <AiOutlineClose onClick={ alterarProjetoAtivo }/>
                        <h3>PROJETO</h3>
                        <p>AMBIENTE: <span>{projeto.ambiente}</span></p>
                        <p>PROFISSIONAL: <span>{projeto.credito}</span></p>
                        <p>PRODUTO: <span>{projeto.produtos}</span></p>
                    </div>
                </div>  
            </div>
        }
    </div>
    )
}