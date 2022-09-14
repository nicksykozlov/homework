import React, {useState, useEffect } from 'react';

function Effect(){
    const [effect, setEffect]= useState(0);

    useEffect(()=>{
        console.log("ghbdtn");
    });

    return(
        <div>
            <p>Вы нажали {effect} раз</p>
            <button onClick={()=>setEffect(effect +1)} >Click</button>
        </div>
    )
}
export default Effect