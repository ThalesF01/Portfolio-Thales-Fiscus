import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;       
    border-radius: 3px;    
    transition-duration: 0.5s; 
    transition-timing-function: ease-in-out;
    width: 89%;
    background-color: black;
    :hover{
        & img{
            opacity: 0.15;
        }
        & a{
            opacity: 1;
        }
        & div{
            opacity: 1;
        }
    }
    @media (max-width:900px){
        flex-direction: column;
        min-width: 140%;        
    }
`

export const Overlay = styled.div`    
    width: 40%;
    height: 50%;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    opacity: 0;
    position: absolute;
    padding: 24px;
    transition: 0.9s;
    font-weight: bold;
    & p{
        color: #fff;
    }
    @media (max-width:900px){        
        width: 62%;
    }
` 

export const Image = styled.img`
    width: 350px;
    height: 350px;
    object-fit: cover;
    display: block;
    opacity: 1;
    transition: 0.5s;
    border-radius: 3px;
`

export const BotoesC = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const Botoes = styled.a`
    margin: 8px;
    text-align: center;        
    border: 1px solid;   
    border-radius: 5px;
    font-size: 1rem;
    text-decoration: none;   
    transition: all 0.5s;
    padding:13px;
    border-color: ${props => props.borderColor}; 
    color: ${props => props.borderColor};
    background-color:#1313138b;
    transition-duration: 0.5s; 
    transition-timing-function: ease-in-out;   
    width: 7.4rem;
    :hover{
        opacity: 1;
        transition: all 0.5s;
        color: #fff;
        border-color: #3e3d3daf; 
        background-color:${props => props.borderColor};          
        border-radius: 0.5rem;       
        transition-duration: 0.5s; 
        transition-timing-function: ease-in-out;
        letter-spacing: 0.7px;
    }        
`

export const Texto = styled.p`    
    font-family: sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;   
    width: 90%;
    color: #f0d8f0;
    font-weight: bold;
    font-size: 1.5rem;   
    color: black;
    @media (max-width:900px){        
        width: 150%;
    }
`
