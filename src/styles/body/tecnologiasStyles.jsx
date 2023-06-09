import styled from 'styled-components'

export const Container = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
    background-color: #121214;
    padding: 2.5rem;  
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
    color: #fff;
    font-weight: bold;
`

export const ContainerH = styled.div`
    display: grid;
    margin-top: 35px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 2.3rem;
    justify-content: center;
    align-items: center;
    width: 95%;
    @media (max-width:900px){       
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 0.2rem;
    }
`