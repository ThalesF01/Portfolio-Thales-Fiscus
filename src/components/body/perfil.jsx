import React from "react";
import PerfilPhoto from '../../assets/perfilPhoto.jpg'
import {Container, PerfilImage, Titulo } from '../../styles/body/perfilStyles'

export default function perfil(){
    return(   
        <Container id="perfil">            
            <PerfilImage src={PerfilPhoto} alt="perfilPhoto" />            
            <Titulo>Thales Fiscus</Titulo>
            <p>Software Developer - FullStack Developer</p>                                    
        </Container>                              
    )
}