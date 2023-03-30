import React from "react";
import { Container, Image, Link, Article, Inf, Techs, BotoesC, Botoes } from "../../styles/body/cardsStyles";

export default function containerProjetos(props){
    return(   
        <Container>
            <Link href={props.vp} target="_blank"><Image src={props.img} alt="ImagemProjeto" /></Link>
            <Article>
                <Inf>{props.texto}</Inf>
                <Techs>Tecnologias usadas: {props.techs}</Techs>
                <BotoesC>

                    <Botoes href={props.vp} target="_blank" borderColor="#28a745">
                        <p>Ver projeto</p>
                    </Botoes>

                    <Botoes href={props.vc} target="_blank" borderColor="#007bff">
                        <p>Ver Código</p>
                    </Botoes>

                </BotoesC>                        
            </Article>            
        </Container> 
    )
}