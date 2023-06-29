import React from 'react'
import './style.css'

export default function ModalNewsletter(props) {
  return (
    <div className='modal-news-letter'>
        <div className='modal-nl-container limitar-largura'>
            <p>Quer fazer parte do nosso Newsletter?</p>
            <div className="botoes-modal-nl">
                <a href='/newsletter' className='botao-modal-nl' >SIM</a>
                <button className='botao-modal-nl' onClick={() => {props.setNaoQuerNewsletter(false)}} >NÃO</button>
            </div>
        </div>
    </div>
  )
}
