import React from "react";
import { Container, Titulo, Projetos } from "../../styles/body/projetosStyles";
import ContainerProjetos from './containerProjetos'
import Conversor from '../../assets/Projetos/Conversor.png'
import Blog from '../../assets/Projetos/Blog.png'
import Pousada from '../../assets/Projetos/Pousada.png'
import Music from '../../assets/Projetos/Music.png'
import Marvel from '../../assets/Projetos/Marvel.png'
import Nubank from '../../assets/Projetos/Nubank.png'
import Calculadora from '../../assets/Projetos/Calculadora.png'

function enviaProjetos(img,texto,techs,vp,vc){
    return <ContainerProjetos img={img} texto ={texto} techs={techs} vp={vp} vc={vc}/>
}

export default function projetos(){
    return(   
        <Container id="projetos">           
            <Titulo>PROJETOS</Titulo>           

            <Projetos>
                {enviaProjetos(Marvel,"Pagina de compras de HQs feita com a API da Marvel","React.js e Styled Components","https://desafio-neo-app.vercel.app/","https://github.com/ThalesF01/Desafio-NeoApp")}
                {enviaProjetos(Conversor,"Conversor de Moedas feito em React.JS","Reacj.JS, JavaScript, HTML5, CSS3 e BootStrap", "https://conversor-moedas-react.vercel.app/", "https://github.com/ThalesF01/Conversor-Moedas-React")}
                {enviaProjetos(Blog, "Blog feito com Node e MongoDB.", "Node.JS, JavaScript, HTML5, CSS3, BootStrap e MongoDB","#","https://github.com/ThalesF01/Blog-Node" )}
                {enviaProjetos(Pousada,"Pagina de reserva de hotel inspirado em exercicio da plataforma DevMedia.","HTML5, CSS3 e JavaScript","https://pousada-teste.vercel.app/","https://github.com/ThalesF01/Pousada-Secreta")}
                {enviaProjetos(Music,"Pagina de musicas no estilo spotify","HTML5, CSS3 e JavaScript","https://music-library-gray.vercel.app/","https://github.com/ThalesF01/Music-Library")}
                {enviaProjetos(Nubank, "Pagina de login de usuário inspirado no Nubank", "HTML5 e CSS3", "https://pagina-login-nubank.vercel.app", "https://github.com/ThalesF01/Pagina-Login-Nubank")}
                {enviaProjetos(Calculadora, "Calculadora", "HTML5 e CSS3", "https://thalesf01.github.io/Calculadora/", "https://github.com/ThalesF01/Calculadora")}
            </Projetos>                        
        </Container>                            
    )
}