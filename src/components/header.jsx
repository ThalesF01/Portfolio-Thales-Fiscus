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
          <NavMenuItem time="0.7s"><a href="#">Home</a></NavMenuItem>
          <NavMenuItem time="1.1s"><a href="#projetos">Projetos</a></NavMenuItem>
          <NavMenuItem time="1.4s"><a href="#exp">Experiências</a></NavMenuItem>
          <NavMenuItem time="1.7s"><a href="#habilidades">Tecnologias</a></NavMenuItem>
          <NavMenuItem time="2s"><a href="#contato">Contato</a></NavMenuItem>
        </NavMenu>
      </Navbar>
    );
  };
  
  export default Header;