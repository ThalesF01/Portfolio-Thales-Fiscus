import React from "react";
import Perfil from './body/perfil'
import Sobre from './body/sobre'
import Projetos from './body/projetos'
import Experiencias from './body/experiencias'
import Habilidades from './body/habilidades'
import '../css/body.css'

export default function body(){
    return(   
        <>
            <div className="capaInicial">
                <Perfil />
                <Sobre />
            </div>            
            <Projetos />
            <Experiencias />
            <Habilidades />            
        </>                          
    )
}