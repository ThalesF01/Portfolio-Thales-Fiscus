import React from "react";
import Box from './boxH'
import HTML from '../../assets/Skills/HTML5.svg'
import CSS from '../../assets/Skills/CSS3.svg'
import JS from '../../assets/Skills/JavaScript.svg'
import Reactjs from '../../assets/Skills/React.svg'
import Nodejs from '../../assets/Skills/Node.svg'

export default function habilidades(){
    return(   
        <div id="habilidades">
            <h1>Habilidades</h1>
            <div className="containerH">
                <Box img={HTML} tech='HTML'/>
                <Box img={CSS} tech='CSS'/>
                <Box img={JS} tech='JavaScript'/>
                <Box img={Reactjs} tech='ReactJS'/>
                <Box img={Nodejs} tech='NodeJS'/>                
            </div>
        </div>       
                                     
    )
}