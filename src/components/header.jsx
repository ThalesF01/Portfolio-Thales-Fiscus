import React, { useState } from "react";
import { Nav, NavContainer, NavLogo, NavMenu, NavItem, NavLink } from "../styles/headerStyles";

const Header = () => {
  return (
    <Nav>
      <NavContainer>        
        <NavMenu>
          <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#projetos">Projetos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#exp">Experiencias</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#habilidades">Tecnologias</NavLink>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Header;