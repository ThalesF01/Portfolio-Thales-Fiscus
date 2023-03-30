import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 15vh;
    background-color: #16161d;
    @media (max-width:999px){
     


    }
`

export const Image = styled.img`
    height: 50px;
    width: 50px;  
    transition-duration: 0.5s; 
    transition-timing-function: ease-in-out;  
    margin: 10px;
    & :hover{
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        transition: all 0.5s;
    }  
    @media (max-width:900px){
        
    }
`

export const Link = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    & :hover{
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        transition: all 0.5s;
    }    
`