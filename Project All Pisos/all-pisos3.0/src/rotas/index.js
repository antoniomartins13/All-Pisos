import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import PaginaInicial from '../paginas/paginaInicial/';
import PaginaProjetos from '../paginas/paginaProjetos/';
import PaginaAmbientes from "../paginas/paginaAmbientes";
import PaginaNewsletter from "../paginas/paginaNewsletter";



export default function rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={ <PaginaInicial/> } />
                <Route path="/inspiracoes" element={ <PaginaProjetos/> } />
                <Route path="/inspiracoes/ambientes" element={ <PaginaAmbientes/>} />
                <Route path="/newsletter" element={ <PaginaNewsletter/> } />
            </Routes>
        </BrowserRouter>
    )
}