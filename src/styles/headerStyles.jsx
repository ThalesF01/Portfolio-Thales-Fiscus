import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: #333;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
  padding: 10px;
`;

export const NavLogo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
`;

export const NavItem = styled.li`
  margin: 0 10px;
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #fff;
    text-decoration: none;
    transform: translateY(-2px);
  }
`;