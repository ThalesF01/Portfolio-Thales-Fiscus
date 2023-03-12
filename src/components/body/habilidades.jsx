import React from "react";
import Box from './boxH'
import HTML from '../../assets/Skills/HTML5.svg'
import CSS from '../../assets/Skills/CSS3.svg'
import JS from '../../assets/Skills/JavaScript.svg'

export default function habilidades(){
    return(   
        <div className="habilidades">
            <h1>Habilidades</h1>
            <div className="containerH">
                <Box img={HTML} tech='HTML'/>
                <Box img={CSS} tech='CSS'/>
                <Box img={JS} tech='JavaScript'/>
            </div>
        </div>       
                                     
    )
}