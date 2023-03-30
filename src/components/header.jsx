import React, { useState } from "react";
import { Navbar, NavMenu, NavMenuItem, NavToggle } from "../styles/headerStyles";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleNav = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <Navbar>
        <NavToggle onClick={toggleNav}>☰</NavToggle>
        <NavMenu isOpen={isOpen}>
          <NavMenuItem><a href="#">Home</a></NavMenuItem>
          <NavMenuItem><a href="#projetos">Projetos</a></NavMenuItem>
          <NavMenuItem><a href="#exp">Experiências</a></NavMenuItem>
          <NavMenuItem><a href="#habilidades">Tecnologias</a></NavMenuItem>
          <NavMenuItem><a href="#contato">Contato</a></NavMenuItem>
        </NavMenu>
      </Navbar>
    );
  };
  
  export default Header;