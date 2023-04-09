import React from "react";
import { Container, Image, Titulo } from "../../styles/body/habilidadesStyles";

export default function boxH(props){
    return( 
        <Container>
            <Titulo>{props.tech}</Titulo>
            <Image src={props.img} alt={props.tech} />
        </Container>                                                                 
    )
}