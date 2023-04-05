import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
    transition-duration: 0.3s; 
    transition-timing-function: ease-in-out;    
    padding:0.5rem;
    & :hover{
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        transition: all 0.5s;
    } 
`

export const Image = styled.img`
    height: 110px;
    width: 110px;
    border-radius: 15px;
    & :hover{
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        transition: all 0.5s;
    }  
    @media (max-width:900px){
        height: 50px;
        width: 50px;
        border-radius: 15px;
    }
`

export const Titulo = styled.h3`
    margin: 0.7rem;
`