import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    justify-content: center;
    width: 100%;    
    padding: 1.5rem;  
    background-color: #722ADF;
`

export const Titulo = styled.h1`
    display: flex;
    justify-content: center;    
    font-size: 3rem;
    color: #121214;
    font-weight: bold;
`

export const Projetos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem 1rem;    
    justify-items: center;
    align-items: center;
    margin: 20px;    
    padding:40px;
    width:90%;    
    border-radius: 15px;
    @media (max-width:900px){        
        display:flex;
        flex-direction: column;  
    }
`