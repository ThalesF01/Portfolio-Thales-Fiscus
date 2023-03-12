import React from "react";
import '../css/header.css'

export default function header(){
    return(        
        <div className="header">
            <ul className="lista">
                <li><a href="#">Home</a></li>
                <li><a href="#">Sobre mim</a></li>
                <li><a href="#">Projetos</a></li>
                <li><a href="#">Experiências</a></li>
                <li><a href="#">Habilidades</a></li>
                <li><a href="#">Contato</a></li>
            </ul>            
        </div>                    
    )
}