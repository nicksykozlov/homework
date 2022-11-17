import { useEffect, useState } from "react";
import Left from './left-arrow.svg'
import Right from './right-arrow.svg'
import Close from './close.svg'

export default function BigFoto(props){

   

    return(

        <div className="modal">
            <div className="container">
            <img className="close" src={Close} alt="" />
            <img className="strelka" src={Left} alt="#"/>
            <img className="big" src={props.image} alt="#"/>
            <img className="strelka" src={Right} alt="#"/>
            </div>
        </div>
    )
}