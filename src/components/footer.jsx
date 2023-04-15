import React from "react";
import Linkedin from '../assets/Icons/linkedin.svg'
import Github from '../assets/Icons/github.svg'
import Email from '../assets/Icons/email.svg'
import { Container, Rede, Image, Link } from "../styles/footerStyles";

export default function footer(){
    return(        
        <Container>
            <Rede>
                <Link href="https://www.linkedin.com/in/thalesf01/" target="_blank">
                <Image src={Linkedin} alt="Linkeidn" />
                <p>Linkedin</p></Link>
            </Rede>      

            <Rede>
                <Link href="https://github.com/ThalesF01" target="_blank">
                <Image src={Github} alt="Github" />
                <p>Github</p>
                </Link>    
            </Rede>
            
            <Rede>
                <Link href="mailto:thalesgabriel07@gmail.com" target="_blank">
                    <Image src={Email} alt="Email" />
                    <p>E-mail</p>
                </Link>
            </Rede>                      
        </Container>                    
    )
}