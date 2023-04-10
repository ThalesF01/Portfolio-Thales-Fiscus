import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: linear-gradient(to left, #191818,#1b1b1d,#1e1e20,#202022);    
    
    flex-direction: column;      
    margin: 30px;
    border-radius: 15px;
    min-width: 30%;
    height:55vh;
    :hover{
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        transition: all 0.5s;
    }
    @media (max-width:900px){
        flex-direction: column;
        min-width: 98%;         
        height:59vh;    
    }
`

export const Image = styled.div`    
    width:90%;
    height:80%;
    display:flex;
    align-items:center;
    justify-content:center;    
    & img{
        height: 80%;
        width: 90%;           
        object-fit: cover;
        border-radius: 10px;
        margin-bottom: 14px;
        transition-duration: 0.5s; 
        transition-timing-function: ease-in-out;
        @media (max-width:900px){  
        height: 180px;
        width: 220px;              
        }
    }        
`

export const Article = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
`

export const Inf = styled.p`
    font-size: 1rem;
    letter-spacing: 0.4px;
    margin-bottom: 15px;
    line-height: 17px;
    font-weight: bold;
`

export const Techs = styled.p`
    font-size: 0.9rem;
    letter-spacing: 0.5px;
    margin-bottom: 15px;
`

export const BotoesC = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const Botoes = styled.a`
    margin: 6px;
    text-align: center;        
    border: 1px solid;   
    border-radius: .5rem;
    font-size: 1rem;
    text-decoration: none;   
    transition: all 0.5s;
    padding: 10px;
    border-color: ${props => props.borderColor}; 
    transition-duration: 0.5s; 
    transition-timing-function: ease-in-out;    
    & p{
        color: ${props => props.borderColor};
        padding: 0.3rem;
        transition-duration: 0.5s; 
    transition-timing-function: ease-in-out; 
    }
    & p:hover{               
        transition: all 0.5s;
        color: #fff;
        background-color:${props => props.borderColor};      
        border-radius: 0.5rem;
        letter-spacing: 1.5px;
        transition-duration: 0.5s; 
    transition-timing-function: ease-in-out; 
    }       
`