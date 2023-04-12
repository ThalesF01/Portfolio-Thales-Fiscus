import styled from 'styled-components';
import 'animate.css';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  opacity: 1;
  background-color: rgb(22, 22, 29);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10vh;
  z-index: 1;  
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 960px;
  margin: 0 auto;
  padding: 10px;
  width: 100%;
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;  
  width: 100%;
`;

export const NavItem = styled.li`
  margin: 0 10px;
  
  
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  padding: 13px;
  animation: fadeIn;
  animation-duration: ${props => props.time};
  :hover{
    letter-spacing: 1.5px;
        border-radius: 15px;
        transform: scale(1.1);
        background-color: #393941;
  }
`;