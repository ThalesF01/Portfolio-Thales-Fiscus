import React from "react";
import { Container, Text, Titulo } from "../../styles/body/sobreStyles";

export default function sobre(){
    return(   
        <Container id="sobre">
            <Titulo>Sobre Mim</Titulo>
            <Text>Formado em Análise e Desenvolvimento de Sistemas pela Unicarioca. Sou um desenvolvedor de sistemas 
                apaixonado por tecnologia e sempre em busca de novos desafios e aprendizados. Tenho sólida experiência 
                em desenvolvimento de software, incluindo linguagens como JavaScript, Java e C#, além de conhecimentos 
                em bancos de dados e frameworks populares como React.js, Node.js e Next.js. Minha habilidade em trabalhar em 
                equipe e comunicação eficaz garantem uma colaboração bem-sucedida com colegas e clientes. Estou 
                constantemente buscando novas tecnologias e soluções para aprimorar meus conhecimentos e a qualidade 
                do meu trabalho. Meu objetivo é fornecer soluções de software de qualidade, eficientes e eficazes que 
                atendam às necessidades do cliente e ajudem a impulsionar o sucesso do negócio.</Text>
        </Container>            
    )
}