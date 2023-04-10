import React from "react";
import YDUQS from '../../assets/YDUQS.png'
import { Container, Titulo, Yduqs, Image, Link, Lista, Item } from "../../styles/body/experienciasStyles";

export default function experiencias(){
    return(   
        <Container id="exp">
            <Titulo>Experiências</Titulo>
            <h2>Analista de Dados</h2>
            <h3>YDUQS - Fevereiro 2022 até Dezembro 2022</h3>
            <Yduqs>
                <Link href="https://www.yduqs.com.br/" target="_blank"><Image src={YDUQS} alt="YDUQS" /></Link>
                <Lista>
                    <Item><p>Contribuir com análises e validações de dados juntamente com o desenvolvimento de pesquisas de captação.</p></Item>
                    <Item><p>Executar a modelagem e atuar no controle de fluxos</p></Item>
                    <Item><p>Realizar rotinas de atualizações de painéis e também na base de dados diariamente.</p></Item>
                    <Item><p>Contribuir com a análise de dados (quantitativo e qualitativo) utilizando big data, apoiando assim uma 
                        tomada de decisão mais assertiva fundamentada em dados.</p></Item>                
                    <Item><p>Vivência em metodologias ágeis como Scrum e Kanban.</p></Item>                
                </Lista>
            </Yduqs>                    
        </Container>                                     
    )
}

