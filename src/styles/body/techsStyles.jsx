import styled from 'styled-components'

export const Container = styled.div`
    height: 95vh;
    display: flex;
    flex-direction: column;    
    justify-content: center;
    align-items: center;    
    
    width:100%;
    @media (max-width:900px){       
        height:110vh;
        justify-content: center;
    align-items: center;   
    }
`

export const Titulo = styled.h1`
    display: flex;
    justify-content: center;
    font-size: 3rem;  
    margin-bottom: 15px;    
`

export const ContainerH = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 3rem;    
    justify-content: center;
    align-items: center;
    @media (max-width:900px){       
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 0.2rem;
    }
`