import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;    
    width: 50%;
    align-items: center;
    justify-content: center;   
    @media (max-width:900px){
        width: 80%;
        height: 50vh;
        justify-content: center;
    }          
`

export const PerfilImage = styled.img`        
        height: 400px;
        width: 400px;
        border-radius: 50%;
        object-fit: cover;    
        @media (max-width:900px){
            height: 400px;
            width: 400px; 
    }    
`

export const Titulo = styled.h1`
    font-size: 3rem;
`