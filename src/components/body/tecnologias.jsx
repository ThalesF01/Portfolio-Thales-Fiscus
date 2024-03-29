import React from "react";
import { Container, Titulo, ContainerH } from "../../styles/body/tecnologiasStyles";
import Box from './habilidades'
import HTML from '../../assets/Skills/HTML5.svg'
import CSS from '../../assets/Skills/CSS3.svg'
import JS from '../../assets/Skills/JavaScript.svg'
import Reactjs from '../../assets/Skills/React.svg'
import Nodejs from '../../assets/Skills/Node.svg'
import Typescript from '../../assets/Skills/Typescript.svg'
import Nextjs from '../../assets/Skills/nextjs.svg'
import Java from '../../assets/Skills/Java.svg'
import Csharp from '../../assets/Skills/csharp.svg'
import Sass from '../../assets/Skills/sass.svg'
import MySql from '../../assets/Skills/MySql.svg'
import GraphQL from '../../assets/Skills/graphql.svg'
import Git from '../../assets/Skills/git.svg'
import Oracle from '../../assets/Skills/oracle.svg'
import Angular from '../../assets/Skills/Angular_full_color_logo.svg.png'
import Tailwind from '../../assets/Skills/TAILWIND.png'

export default function tecnologias(){
    return(   
        <Container id="habilidades">
            <Titulo>TECNOLOGIAS</Titulo>
            <ContainerH>
                <Box img={HTML} tech='HTML'/>
                <Box img={CSS} tech='CSS'/>
                <Box img={JS} tech='JavaScript'/>
                <Box img={Reactjs} tech='ReactJS'/>
                <Box img={Nodejs} tech='NodeJS'/> 
                <Box img={Typescript} tech='Typescript'/>
                <Box img={Nextjs} tech='NextJS'/> 
                <Box img={Angular} tech='Angular'/>
                <Box img={Java} tech='Java'/> 
                <Box img={Csharp} tech='C-Sharp'/>                 
                <Box img={Tailwind} tech='Tailwind'/>             
                <Box img={Sass} tech='Sass'/>                 
                <Box img={GraphQL} tech='GraphQL'/>              
                <Box img={MySql} tech='MySql'/>              
                <Box img={Oracle} tech='Oracle'/>                
                <Box img={Git} tech='Git'/>
            </ContainerH>
        </Container>                                            
    )
}