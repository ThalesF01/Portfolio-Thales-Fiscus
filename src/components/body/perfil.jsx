import React from "react";
import PerfilPhoto from '../../assets/perfilPhoto.jpg'
import '../../css/body/perfil.css'

export default function perfil(){
    return(   
        <div id="perfil">

            <div className="perfilPhoto">
                <img src={PerfilPhoto} alt="perfilPhoto" />
            </div>

            <h1>Thales Fiscus</h1>
            <p>Software Developer - FullStack Developer</p>                                    
        </div>                              
    )
}