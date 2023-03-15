import React from "react";
import '../../css/body/containerProjetos.css'

export default function containerProjetos(props){
    return(   
        <div className="container">
            <a href={props.vp} target="_blank"><img src={props.img} alt="Pousada" /></a>
            <div className="texto">
                <p>{props.texto}</p>
                <p>tecnologias usadas: {props.techs}</p>
                <div className="links">
                    <p>Ver projeto: <a href={props.vp} target="_blank">LINK</a></p>
                    <p>Ver Codigo: <a href={props.vc} target="_blank">LINK</a></p>    
                </div>                        
            </div>            
        </div> 
    )
}