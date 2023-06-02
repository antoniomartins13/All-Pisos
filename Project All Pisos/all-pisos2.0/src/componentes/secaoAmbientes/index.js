import React, {useEffect} from "react";
import './style.css';
import { Link } from "react-router-dom";
import { AiOutlineClose } from 'react-icons/ai'
import { CiSearch } from 'react-icons/ci'
import ProjetoAmbiente from "./projetoAmbiente";
import projetos from "./dados";

export default function SecaoAmbientes() {

    const documentUrl = document.URL
    const localizacaoIgual = documentUrl.indexOf('=')  
    const parametro = localizacaoIgual !== -1 ? documentUrl.substring(localizacaoIgual + 1) : ''

    useEffect(() => {
        filtraAmbiente()
    }, [])

    function filtraAmbiente() {
        const inputFilter = document.querySelector('.input-categoria input');
        const cardsProjeto = document.querySelectorAll('.projeto-inspiracao');
        if(inputFilter !== ''){
            for (const cardProjeto of cardsProjeto) {
                const ambiente = cardProjeto.querySelector('div h3')
                const ambienteMinusculo = ambiente.textContent.toLowerCase()

                const produto = cardProjeto.querySelector('div p span')
                const produtoMinusculo = produto.textContent.toLowerCase()

                const textoDoFiltro = inputFilter.value.toLowerCase()

                if(!ambienteMinusculo.includes(textoDoFiltro) && !produtoMinusculo.includes(textoDoFiltro)){
                    cardProjeto.style.display = 'none'
                }else{
                    cardProjeto.style.display = 'block'
                }
            }
        }else{
            for (const cardProjeto of cardsProjeto) {
                cardProjeto.style.display = 'block'
            }
        }
    }

    function limpaAmbiente(){
        const inputFilter = document.querySelector('.input-categoria input');
        inputFilter.value = ''
        filtraAmbiente()
    }

    return(
        <section className="secao-ambientes limitar-largura"> 
            <div className=" input-categoria">
                <h2><Link to='/inspiracoes'>INSPIRAÇÃO</Link> &gt; AMBIENTES</h2>
                <label>Categoria</label>  
                <input 
                    type="text" 
                    id="filtra-categoria" 
                    placeholder="Ambiente"
                    defaultValue={parametro}
                    onInput={ filtraAmbiente }    
                />
                <CiSearch />
                <AiOutlineClose onClick={ limpaAmbiente }/> 
            </div>    

            <div className="projetos-inspiracoes">
                {projetos.map( (projeto, index) => (
                    <ProjetoAmbiente key={index} projeto={projeto} />
                ))}
            </div>
        </section>
    )
}