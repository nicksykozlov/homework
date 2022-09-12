import { useState, Fragment, useEffect } from "react";

const React = require("react");

function App(){
    const[count, setCount] = useState(0);
    const[delta, setDelta] = useState(1);

   useEffect(()=>{
    document.title=`Cliced:${count}`;},[count]
   );

    return(
        <Fragment>
    <p >{count}</p>
    <input
    type='number'
    value={delta}
    onChange ={(e)=>setDelta(Number.parseInt(e.target.value))}
    />
    <button onClick={()=>setCount(count+1)} >Click</button>
    </Fragment>
    )
}
module.exports = App;