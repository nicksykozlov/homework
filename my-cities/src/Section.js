import { useState, useEffect } from "react";
import Weather from "./Weather";
export default function Section(props){// props это весь json прилител из APP

    const[selected, setSelected]= useState([]);

    console.log(selected);
  


    return(
        <>
        
        <ul>
            {props.areas.map(area=><li 
            onClick={()=>setSelected(area)}// props.areas в APP areas={json} 
            key={area.id}
            >
                {area.name}
            </li>)}
        </ul>
                {selected?.areas?.length&& <Section key={selected.id} areas={selected.areas}/>}

                 {selected?.areas?.length===0 &&  <Weather  city={selected.name}/>} 
                 

                                                    
        </>
        
    )

}