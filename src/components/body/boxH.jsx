import React from "react";
import { Container, Image, Titulo } from "../../styles/body/boxStyles";

export default function boxH(props){
    return( 
        <Container>
            <Titulo>{props.tech}</Titulo>
            <Image src={props.img} alt={props.tech} />
        </Container>                                                                 
    )
}