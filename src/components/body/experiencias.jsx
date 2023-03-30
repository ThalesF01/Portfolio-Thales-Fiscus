import React from "react";
import YDUQS from '../../assets/YDUQS.png'
import { Container, Titulo, Yduqs, Image, Link, Lista, Item } from "../../styles/body/expStyles";

export default function experiencias(){
    return(   
        <Container id="exp">
            <Titulo>Experiências</Titulo>
            <h2>Analista de Dados</h2>
            <h3>YDUQS - Fevereiro 2022 até Dezembro 2022</h3>
            <Yduqs>
                <Link href="https://www.yduqs.com.br/" target="_blank"><Image src={YDUQS} alt="YDUQS" /></Link>
                <Lista>
                    <Item><p>Análise de Dados (quantitativo e qualitativo) utilizando big data, apoiando assim uma tomada de decisão mais 
                        assertiva fundamentada em dados.</p></Item>
                    <Item><p>Realizar rotinas de atualizações nos painéis e amodelagem, validação e controle de fluxos dados 
                        diariamente.</p></Item>
                    <Item><p>Responsável por elaboração de relatórios da área de Analytics, dando suporte a outras áreas da 
                        companhia para o acompanhamento dos insumos através dos dashboards em Power BI.</p></Item>
                    <Item><p>Vivência em metodologias ágeis como Scrum e Kanban.</p></Item>                
                </Lista>
            </Yduqs>                    
        </Container>                                     
    )
}

