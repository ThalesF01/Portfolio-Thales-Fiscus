import React from "react";
import '../../css/body/boxH.css'

export default function boxH(props){
    return( 
        <div className="box">
            <h1>{props.tech}</h1>
            <img src={props.img} alt={props.tech} />
        </div>                                                                 
    )
}