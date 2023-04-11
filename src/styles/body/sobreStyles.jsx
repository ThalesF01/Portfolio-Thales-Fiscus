import styled from 'styled-components'
import 'animate.css';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;      
    width: 50%;    
    animation: fadeInLeft; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 3.5s; /* don't forget to set a duration! */
    @media (max-width:900px){       
        width: 93%;
        height: 100%;        
    } 
`

export const Text = styled.p`
    letter-spacing: 0.9px;
    line-height: 1.7;
    font-size: 1rem;       
    @media (max-width:900px){            
        width: 100%;
        font-size: 0.9rem;
    }
`

export const Titulo = styled.h1`    
    font-size: 3rem;
    margin-bottom: 20px;
`