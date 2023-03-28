import React from "react";
import Container from './containerProjetos'
import Conversor from '../../assets/Projetos/Conversor.png'
import Blog from '../../assets/Projetos/Blog.png'
import Pousada from '../../assets/Projetos/Pousada.png'
import Music from '../../assets/Projetos/Music.png'
import '../../css/body/projetos.css'

function enviaProjetos(img,texto,techs,vp,vc){
    return <Container img={img} texto ={texto} techs={techs} vp={vp} vc={vc}/>
}

export default function projetos(){
    return(   
        <div id="projetos">
            <div className="titulo">
                <h1>Projetos</h1>
            </div>

            <div id="demo">
                {enviaProjetos(Conversor,"Conversor de Moedas feito em React.JS","Reacj.JS, JavaScript, HTML5, CSS3 e BootStrap", "https://conversor-moedas-react.vercel.app/", "https://github.com/ThalesF01/Conversor-Moedas-React")}
                {enviaProjetos(Blog, "Blog feito com Node e MongoDB.", "Node.JS, JavaScript, HTML5, CSS3, BootStrap e MongoDB","#","https://github.com/ThalesF01/Blog-Node" )}
                {enviaProjetos(Pousada,"Pagina de reserva de hotel inspirado em exercicio da plataforma DevMedia.","HTML5, CSS3 e JavaScript","https://pousada-teste.vercel.app/","https://github.com/ThalesF01/Pousada-Secreta")}
                {enviaProjetos(Music,"Pagina de musicas no estilo spotify","HTML5, CSS3 e JavaScript","https://music-library-gray.vercel.app/","https://github.com/ThalesF01/Music-Library")}
                {enviaProjetos(Conversor,"Pagina de compras de HQs da Marvel","React.js e Styled Components","https://desafio-neo-app.vercel.app/","https://github.com/ThalesF01/Desafio-NeoApp")}
            </div>
                        
        </div>                            
    )
}