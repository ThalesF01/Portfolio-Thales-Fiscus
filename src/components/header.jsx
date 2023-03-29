import React from "react";
import '../css/header.css'
import { Container, Lista, Link } from "../styles/headerStyles";

export default function header(){
    return(
        <header>
            <Container>                
                <Lista>
                    <Link><a href="#">Home</a></Link>
                    <Link><a href="#projetos">Projetos</a></Link>
                    <Link><a href="#exp">Experiências</a></Link>
                    <Link><a href="#habilidades">Tecnologias</a></Link>
                    <Link><a href="#contato">Contato</a></Link>
                </Lista>      
            </Container>      
        </header>                   
    )
}