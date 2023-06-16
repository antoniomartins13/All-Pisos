import React, { useEffect, useState } from "react";
import './style.css';

export default function SecaoNossoInstagram(){

    function getFeedInsta(){
        const token = process.env.REACT_APP_INSTA_TOKEN;
        const fields = 'media_url,media_type,permalink,username,fieldname_of_type_ProfilePictureSource'
        const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setFeedInsta(data.data);
            })
            .catch(error => {
                console.log('Ocorreu um erro')
            })
    }
    const [feedInsta, setFeedInsta] = useState();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        getFeedInsta();
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
          };
      
          window.addEventListener("resize", handleResize);
      
          return () => {
            window.removeEventListener("resize", handleResize);
          };
    },[])
    const publicacoesExibidas = windowWidth <= 426 ? 8 : 9 ;

    return(
        <section className="secao-nosso-insta">
            <article className="titulo-paragrafo">
                <h2>NOSSO INSTAGRAM</h2>
                <p>Conheça o nosso instgram</p>
            </article>

            <div className="perfil-insta limitar-largura">
                <a href="https://www.instagram.com/allpisosacabamentos/" target="_blank" className="foto-perfil">
                    <img src="/assets/foto-perfil.png" alt="Perfil All Pisos" />
                </a>

                <div className="nome-perfil">
                    <a href="https://www.instagram.com/allpisosacabamentos/" target="_blank">allpisosacabamentos</a>
                    <a href="https://www.instagram.com/allpisosacabamentos/" target="_blank">Ver o instagram</a>
                </div>

            </div>

            <div className="nosso-instagram limitar-largura">
                {feedInsta !== undefined && feedInsta.slice(0, publicacoesExibidas).map(publicacao => (
                    <a key={publicacao.id} href={publicacao.permalink} target="_blank" className="publicacao">
                        {(publicacao.media_type === 'IMAGE' || publicacao.media_type === 'CAROUSEL_ALBUM') ? <img src={publicacao.media_url} alt=""/> : 
                            <video controls>
                                <source src={publicacao.media_url} />
                            </video>
                        }
                    </a>
                ))}
            </div>
        </section>
    )
}