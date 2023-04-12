import styled from 'styled-components'
import 'animate.css';

export const Container = styled.div`
    display: flex;
    flex-direction: column;   
    
    
    width: 50%;
    align-items: center;
    justify-content: center;
    animation: zoomIn; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 3s; /* don't forget to set a duration! */
    @media (max-width:900px){
        width: 80%;
        height: 100vh;
        justify-content: end;
    }
`

export const PerfilImage = styled.img`        
        height: 400px;
        width: 400px;
        border-radius: 50%;
        object-fit: cover;    
        @media (max-width:900px){
            height: 300px;
            width: 300px; 
    }    
`

export const Titulo = styled.h1`
    font-size: 3rem;
`