import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;            
    padding: 2.5rem;         
`

export const Titulo = styled.h1`    
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    font-size: 3rem;
`

export const Yduqs = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: center;  
    align-items: center;
    @media (max-width:900px){
        flex-direction: column;
    }
`

export const Image = styled.img`
    height: 260px;
    width: 260px;
    border-radius: 20px;
    transition-duration: 0.5s; 
    transition-timing-function: ease-in-out;      
`

export const Link = styled.a`
    & :hover{
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        transition: all 0.5s;
    }    
`

export const Lista = styled.ul`
    margin-left: 2.5rem;
`

export const Item = styled.li`
    padding: 0.5rem;
    font-size: 1.2rem;
`