import React from "react";
import { Nav, NavContainer, NavMenu, NavItem, NavLink } from "../styles/headerStyles";

const Header = () => {
  return (
    <Nav>
      <NavContainer>        
        <NavMenu>
          <NavItem>
            <NavLink href="#" time="3.8s">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#projetos" time="4.4s">Projetos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#exp" time="5s">Experiencias</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#habilidades" time="5.6s">Tecnologias</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contato" time="6.2s">Contato</NavLink>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Header;