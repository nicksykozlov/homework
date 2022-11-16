import { useEffect, useState } from "react";
import Left from './left-arrow.svg'
import Right from './right-arrow.svg'


export default function BigFoto(props){

   

    return(

        <div className="modal">
            <img className="strelka" src={Left} alt="#"/>
            <img src={props.image} alt="#"/>
            <img className="strelka" src={Right} alt="#"/>
        </div>
    )
}