import React from "react";
import { Container, Image, Titulo } from "../../styles/body/habilidadesStyles";

export default function habilidades(props){
    return( 
        <Container>
            <Titulo>{props.tech}</Titulo>
            <Image src={props.img} alt={props.tech} />
        </Container>                                                                 
    )
}