import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    justify-content: center;
    width: 100%;    
    padding: 1.5rem;    
`

export const Titulo = styled.h1`
    display: flex;
    justify-content: center;    
    font-size: 3rem;
`

export const Projetos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 3rem;    
    justify-items: center;
    align-items: center;
    margin: 20px;    
    padding:20px;
    width:90%; 
    @media (max-width:900px){
        display:flex;
        flex-direction: column;  
    }
`