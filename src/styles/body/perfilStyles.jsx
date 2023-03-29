import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 50%;
    align-items: center;
    justify-content: center;
    margin-top: 10vh;  
    & h1{
        font-size: 2.5rem
    }
`

export const PerfilImage = styled.img`
        background-color: red;
        height: 400px;
        width: 400px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 20px;
`