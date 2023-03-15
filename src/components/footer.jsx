import React from "react";
import Linkedin from '../assets/Icons/linkedin.svg'
import Github from '../assets/Icons/github.svg'
import Email from '../assets/Icons/email.svg'
import '../css/footer.css'

export default function footer(){
    return(        
        <div id="contato">
            <div className="links">
                <a href="https://www.linkedin.com/in/thalesf01/" target="_blank">
                <img src={Linkedin} alt="Linkeidn" />
                <p>Meu linkedin</p></a>
            </div>

            <div className="links">
                <a href="https://github.com/ThalesF01" target="_blank">
                <img src={Github} alt="Github" />
                <p>Meu Github</p>
                </a>
            </div>

            <div className="links">
                <a href="mailto:thalesgabriel07@gmail.com" target="_blank">
                    <img src={Email} alt="Email" />
                    <p>Meu E-mail</p>
                </a>
            </div>            
        </div>                    
    )
}