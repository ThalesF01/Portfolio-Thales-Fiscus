import styled from 'styled-components'

export const Navbar = styled.nav`
  width: 100%;
    background-color: #16161d;
    height: 15vh;
    display: flex;
    align-items: center;    
    justify-content: center;
    transition: 0.6s;
    transition-duration: 0.5s; 
        transition-timing-function: ease-in-out;        ;
  @media (max-width: 900px) {
    flex-direction: column;
    transition-duration: 0.5s; 
        transition-timing-function: ease-in-out;
    height: auto;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  padding: 0.5rem;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  margin: 15px;  
  transition-duration: 0.5s; 
        transition-timing-function: ease-in-out;
  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    justify-content: space-around;
  }
`;

export const NavMenuItem = styled.li`
    margin: 30px;
  & a{
        letter-spacing: 2px;
        text-decoration: none;
        color: #fafafa;  
        padding: 1.6rem;
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
        padding:1.3rem ;
    }
`;

export const NavToggle = styled.div`
  display: none; 
  padding:20px;
  @media (max-width: 900px) {
    display: block;
  }
`;