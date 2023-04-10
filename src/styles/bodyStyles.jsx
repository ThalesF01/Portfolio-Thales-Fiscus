import React from 'react';
import styled from 'styled-components';
import 'animate.css';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 85vh;
    
    @media (max-width:999px){
     flex-direction:column;
     align-items: center;
     justify-content: center;
     height: 150vh;
    }
`

export const Body = styled.div`   
    
    background-image: linear-gradient(0.25turn, #101010,#18181a,#1e1e20,#26262a);
    background-size: 400% 400%;
    animation: gradientAnimation 7s ease infinite;

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
