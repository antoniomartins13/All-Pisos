import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import PaginaInicial from '../paginas/paginaInicial/';
import PaginaProjetos from '../paginas/paginaProjetos/';


export default function rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={ <PaginaInicial/> } />
                <Route path="/projetos" element={ <PaginaProjetos/> } />
            </Routes>
        </BrowserRouter>
    )
}