import styled from 'styled-components'
import 'animate.css';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 85vh;
    
    @media (max-width:999px){
     flex-direction:column;
     align-items: center;
     justify-content: center;
     height: 150vh;
    }
`

export const Body = styled.div`
    background: linear-gradient(0.25turn, #111112, #202027, #292933);
    width: 100%;
`