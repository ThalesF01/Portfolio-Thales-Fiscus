import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;      
    width: 50%;    
    @media (max-width:900px){       
        width: 80%;
    }
    & p{
        letter-spacing: 0.9px;
        line-height: 1.5;
        font-size: 1.1rem;
        width: 93%;
        @media (max-width:900px){            
            width: 100%;
            font-size: 0.9rem;
        }  
    }
`

export const Titulo = styled.h1`
    font-size: 3rem;
    margin-bottom: 20px;
`