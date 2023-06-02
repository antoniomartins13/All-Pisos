import { useState, useEffect, useRef } from "react";
import React from "react";
import './style.css'

import projetos from "./dados";
import { motion } from "framer-motion";



export default function SecaoCarrossel(){
   
    const carrossel = useRef()
    const [width, setWidth] = useState(0)
    useEffect(() => {
        setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
    },[])

    return(
    <div className="secao-inspiracoes">
        <article>
            <p>Busque aqui algumas inspirações para o seu projeto</p>
        </article>
        <section className="secao-carrossel">
            <motion.div ref={carrossel} className="carrossel" whileTap={{cursor: 'grabbing'}}>
                <motion.div 
                className="inner" 
                drag='x'
                dragConstraints={{right: 0, left: -width}}
                >
                    {projetos.map(imagem =>(
                        <motion.div className="projeto" key={imagem}>
                            <img src={imagem} alt="Projetos"/>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    </div>
    )
}