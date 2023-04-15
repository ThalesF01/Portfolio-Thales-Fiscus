import React from 'react';
import styled from 'styled-components';
import 'animate.css';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 105vh;
    background-color: #121214;
    @media (max-width:999px){
     flex-direction:column;
     align-items: center;
     justify-content: center;
     height: 140vh;
    }
`

export const Body = styled.div`   
    
`;
