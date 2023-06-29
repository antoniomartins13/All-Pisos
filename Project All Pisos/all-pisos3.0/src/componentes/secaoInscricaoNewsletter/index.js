import React, { useState } from 'react';
import './style.css'

import emailjs from '@emailjs/browser'

function SecaoInscricaoNewsletter() {
    
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [numero, setNumero] = useState('')
    const [termo, setTermo] = useState(false)
    function enviarFormulario(){
        const nomeValido = nome !== ''? true : false ;
        const emailValido = email.includes('@');
        const numeroValido = (numero.length >= 11) ? true : false;
        const termoValido = termo === true
        
        if(nomeValido && emailValido && numeroValido && termoValido){
            const templateParams = {
                nome: nome,
                email: email,
                numero: numero
            }

            emailjs.send('service_ekntgmc', 'template_8e0v8zl', templateParams, '2KBwh3tV-uMz6jVis')
            .then((res) => {
                emailjs.send('service_ekntgmc','template_kf7134o', templateParams, '2KBwh3tV-uMz6jVis')
                setEmail('');
                setNome('');
                setNumero('');
                document.querySelector('.status-formulario').innerHTML = 'Cadastro realizado';
                document.querySelector('.status-formulario').style.color = 'green'

            }, (err) => {
                console.log('Erro ao enviar o formulário')
                alert('Erro ao enviar o formulário')
            })
        }else{
            alert('Algum campo foi preenchido incorretamente');

            if(nomeValido === false){
                document.querySelector('.nome').innerHTML = 'Preencha este campo';
                document.querySelector('.nome').style.color = 'red'
                
            }
            else{
                document.querySelector('.nome').innerHTML = ''
            }
            if(emailValido === false){
                document.querySelector('.email').innerHTML = 'Preencha este campo com um email válido'
                document.querySelector('.email').style.color = 'red'
            }
            else{
                document.querySelector('.email').innerHTML = ''
            }
            if(numeroValido === false){
                document.querySelector('.numero').innerHTML = 'Preencha este campo com um número válido'
                document.querySelector('.numero').style.color = 'red'
            }
            else{
                document.querySelector('.numero').innerHTML = ''
            }

            document.querySelector('.status-formulario').innerHTML = 'Algum campo foi preenchido incorretamente';
            document.querySelector('.status-formulario').style.color = 'red'
        }
    }
  return (
    <section className='secao-newsletter'>
        <article className="titulo-paragrafo">
            <h2>Newsletter</h2>
            <p>Se inscreva para receber novidades e promoções da nossa loja</p>
        </article>

        
        <form className='formulario-container limitar-largura' onSubmit={(e) => {e.preventDefault()}}>
            <div className='formulario-input'>
                <label>Nome</label>
                <input 
                    type="text" 
                    placeholder='nome' 
                    required 
                    onChange={(e) => {setNome(e.target.value)}}
                    value={nome}
                />
                <p className="nome"></p>
            </div>
            <div className='formulario-input'>
                <label>Email</label>
                <input 
                    type="text" 
                    placeholder='email' 
                    required
                    onChange={(e) => {setEmail(e.target.value)}}
                    value={email}
                />
                <p className="email"></p>
            </div>
            <div className='formulario-input'>
                <label>Número</label>
                <input 
                    type="text" 
                    placeholder='número'
                    required
                    onChange={(e) => {setNumero(e.target.value)}}
                    value={numero}
                />
                <p className="numero"></p>
            </div>
            <div className="termo-de-adesao">
                <input type="checkbox" name='adesao' id='adesao' value={termo} onClick={(e) => {setTermo(!termo)}}/>
                <label htmlFor="adesao">Aceito receber mensagens no Whatsapp e no Email</label>
            </div>
            <button onClick={(e)=> {
                e.preventDefault();
                enviarFormulario()
            }}>
                ENVIAR
            </button>
        </form>
        <p className='status-formulario'></p>
    </section>
  )
}

export default SecaoInscricaoNewsletter