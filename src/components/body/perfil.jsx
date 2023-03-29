import React from "react";
import PerfilPhoto from '../../assets/perfilPhoto.jpg'
import {Container, PerfilImage } from '../../styles/body/perfilStyles'

export default function perfil(){
    return(   
        <Container id="perfil">            
            <PerfilImage src={PerfilPhoto} alt="perfilPhoto" />            
            <h1>Thales Fiscus</h1>
            <p>Software Developer - FullStack Developer</p>                                    
        </Container>                              
    )
}