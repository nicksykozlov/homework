import { useEffect, useState } from "react";
import Left from './left-arrow.svg'
import Right from './right-arrow.svg'
import Close from './close.svg'

export default function BigFoto(props){

   

    return(

        <div className="modal">
            <div className="container">
            <img className="close" src={Close} alt=""  onClick={props.Onclose}/>
            <img className="strelka" src={Left} alt="#" onClick={()=>props.onNavigate(-1)}/>
            <img className="big" src={props.image} alt="#"/>
            <img className="strelka" src={Right} onClick={()=>props.onNavigate(1)} alt="#"/>
            <span>{props.page}</span>
            </div>
        </div>
    )
}