import React from "react";
import '../css/header.css'

export default function header(){
    return(        
        <div className="header">
            <ul className="lista">
                <li><a href="#">Home</a></li>           
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#experiencias">Experiências</a></li>
                <li><a href="#habilidades">Habilidades</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>            
        </div>                    
    )
}