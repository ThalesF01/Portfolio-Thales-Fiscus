import React from 'react';
import styled from 'styled-components';
import 'animate.css';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 105vh;
    @media (max-width:999px){
     flex-direction:column;
     align-items: center;
     justify-content: center;
     height: 140vh;
    }
`

export const Body = styled.div`   
    
    background-image: linear-gradient(0.25turn, #141313,#242222,#373232,#443838);
    background-size: 400% 400%;
    animation: gradientAnimation 6s ease infinite;

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
