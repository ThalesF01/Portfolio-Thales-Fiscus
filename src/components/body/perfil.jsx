import React from "react";
import PerfilPhoto from '../../assets/perfilPhoto.jpg'
import GitHub from '../../assets/Icons/github-square-brands.svg'
import Linkedin from '../../assets/Icons/linkedin-brands.svg'
import Instagram from '../../assets/Icons/instagram-brands.svg'
import '../../css/body/perfil.css'

export default function perfil(){
    return(   
        <div className="perfil">

            <div className="perfilPhoto">
                <img src={PerfilPhoto} alt="perfilPhoto" />
            </div>

            <h1>Thales Fiscus</h1>
            <p>Software Developer - FullStack Developer</p>

            <div className="SocialMedia">
                <ul>
                    <li><a href="https://github.com/ThalesF01" target="_blank"><img src={GitHub} alt="GitHub" /></a></li>
                    <li><a href="https://github.com/ThalesF01" target="_blank"><img src={Linkedin} alt="GitHub" /></a></li>
                    <li><a href="https://github.com/ThalesF01" target="_blank"><img src={Instagram} alt="GitHub" /></a></li>        
                </ul>
            </div>            
        </div>                              
    )
}