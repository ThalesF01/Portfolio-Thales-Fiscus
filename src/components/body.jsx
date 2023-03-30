import React from "react";
import Perfil from './body/perfil'
import Sobre from './body/sobre'
import Projetos from './body/projetos'
import Experiencias from './body/experiencias'
import Habilidades from './body/habilidades'
import { Container, Body } from "../styles/bodyStyles";

export default function body(){
    return(
        <Body>
            <Container>
                <Perfil />
                <Sobre />
            </Container>            
            <Projetos />
            <Experiencias />
            <Habilidades />
        </Body>
    )
}