import React from "react";
import { Nav, NavContainer, NavMenu, NavItem, NavLink } from "../styles/headerStyles";

const Header = () => {
  return (
    <Nav>
      <NavContainer>        
        <NavMenu>
          <NavItem>
            <NavLink href="#" time="5s">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#projetos" time="5.6s">Projetos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#exp" time="6.2s">Experiencias</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#habilidades" time="6.8s">Tecnologias</NavLink>
          </NavItem>          
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Header;