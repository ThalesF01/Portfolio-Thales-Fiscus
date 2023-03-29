import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 85vh;
    margin-top: 10vh;
    width: 50%;
    & h1{
        font-size: 3rem;
        margin-bottom: 20px;
    }
    & p{
        letter-spacing: 0.9px;
        line-height: 1.5;
        font-size: 1.1rem;
        width: 90%;
    }
`