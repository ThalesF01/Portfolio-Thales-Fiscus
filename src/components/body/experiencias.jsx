import React from "react";
import '../../css/body/exp.css'
import YDUQS from '../../assets/YDUQS.png'

export default function experiencias(){
    return(   
        <div id="exp">
            <h1>Experiências</h1>
            <h2>Analista de Dados</h2>
            <h3>YDUQS - Fevereiro 2022 até Dezembro 2022</h3>
            <div className="YDUQS">
                <a href="https://www.yduqs.com.br/" target="_blank"><img src={YDUQS} alt="YDUQS" /></a>
                <ul>
                    <li><p>Análise de Dados (quantitativo e qualitativo) utilizando big data, apoiando assim uma tomada de decisão mais 
                        assertiva fundamentada em dados.</p></li>
                    <li><p>Realizar rotinas de atualizações nos painéis e amodelagem, validação e controle de fluxos dados 
                        diariamente.</p></li>
                    <li><p>Responsável por elaboração de relatórios da área de Analytics, dando suporte a outras áreas da 
                        companhia para o acompanhamento dos insumos através dos dashboards em Power BI.</p></li>
                    <li><p>Vivência em metodologias ágeis como Scrum e Kanban.</p></li>                
                </ul>
            </div>                    
        </div>                                     
    )
}

