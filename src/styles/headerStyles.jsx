import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    background-color: #16161d;
    height: 15vh;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    justify-content: center;
`

export const Lista = styled.ul`
    width:80%;
    display: flex;    
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    @media (max-width:999px){
        position: absolute;
        top: 8vh;
        right: 0;
        width: 45vh;
        height: 85vh;
        flex-direction: column;
        align-items: center;
        background-color: #16161d;
        transform: translateX(100%);
    }
`

export const Link = styled.li`
    & a{
        letter-spacing: 2px;
        text-decoration: none;
        color: #fafafa;  
        padding: 1rem;
        transition-duration: 0.5s; 
        transition-timing-function: ease-in-out;
        font-size: 1.1rem;
    }
    & a:hover{
        letter-spacing: 3px;
        opacity: 0.7;
        transform: scale(1.3);
        background-color: #393941;
        border-radius: 20px;    
        padding:1rem ;
    }
    
`