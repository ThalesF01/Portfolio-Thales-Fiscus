import React from "react";
import '../../css/body/containerProjetos.css'

export default function containerProjetos(props){
    return(   
        <div className="container">
            <a className="fotoProjeto" href={props.vp} target="_blank"><img src={props.img} alt="ImagemProjeto" /></a>
            <div className="texto">
                <p className="inf">{props.texto}</p>
                <p className="techs">Tecnologias usadas: {props.techs}</p>
                <div className="link">
                    <a href={props.vp} target="_blank">Ver projeto</a>
                    <a href={props.vc} target="_blank">Ver Código</a>                    
                </div>                        
            </div>            
        </div> 
    )
}