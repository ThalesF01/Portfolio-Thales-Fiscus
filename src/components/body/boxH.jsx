import React from "react";
import '../../css/body/boxH.css'

export default function boxH(props){
    return( 
        <div className="box">
            <h3>{props.tech}</h3>
            <img src={props.img} alt={props.tech} />
        </div>                                                                 
    )
}