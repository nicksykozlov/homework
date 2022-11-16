import { useState, useEffect } from "react";

export default function Section(props){

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
                {selected?.areas?.length&& // 
                <Section key={selected.id} areas={selected.areas}/>}

        </>
        
    )

}