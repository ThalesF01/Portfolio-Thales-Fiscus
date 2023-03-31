import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    justify-content: center;
    width: 100%;    
    padding: 1.5rem;
    & ::-webkit-scrollbar{
    border-radius: 15px;    
    height: 15px;
    }   
    & ::-webkit-scrollbar-thumb{
    background-color:#16161d;
    border-radius: 15px;
    }
    & ::-webkit-scrollbar-track{
    background-color: #2a2a31;
    border-radius: 15px;
    }
`

export const Titulo = styled.h1`
    display: flex;
    justify-content: center;    
    font-size: 3rem;
`

export const Projetos = styled.div`
    display: flex;
    overflow:auto;
    justify-items: center;
    align-items: center;
    margin: 20px;    
    padding:20px;
    width:90%; 
`