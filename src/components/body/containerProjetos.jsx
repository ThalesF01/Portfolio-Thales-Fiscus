import React from "react";
import { Container, Image, Overlay,Texto, BotoesC, Botoes } from "../../styles/body/containerProjetosStyles";

export default function containerProjetos(props){
    return(
        <Container>
            <Image src={props.img} alt="ImagemProjeto"/>
            <Overlay>
                <Texto>{props.texto}</Texto>
                <p>Tecnologias usadas: {props.techs}</p>
                <BotoesC>
                    <Botoes href={props.vp} target="_blank" borderColor="#28a745">Ver projeto</Botoes>
                    <Botoes href={props.vc} target="_blank" borderColor="#007bff">Ver Código</Botoes>
                </BotoesC>
            </Overlay>
        </Container>
    )
}