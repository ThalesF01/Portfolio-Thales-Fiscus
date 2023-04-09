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
          <NavMenuItem time="0.5s"><a href="#">Home</a></NavMenuItem>
          <NavMenuItem time="0.9s"><a href="#projetos">Projetos</a></NavMenuItem>
          <NavMenuItem time="1.2s"><a href="#exp">Experiências</a></NavMenuItem>
          <NavMenuItem time="1.5s"><a href="#habilidades">Tecnologias</a></NavMenuItem>
          <NavMenuItem time="1.8s"><a href="#contato">Contato</a></NavMenuItem>
        </NavMenu>
      </Navbar>
    );
  };
  
  export default Header;