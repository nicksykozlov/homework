import { useState, useEffect } from "react";


export default function Section(props){

    const[selected, setSelected]= useState([]);

    const[weather, setWeather] = useState ({})

  
    useEffect(()=>{
        (async()=>{
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=677092f830694cd791c170532221411&q=${props.name}&aqi=no`)
            const json = await response.json();
            setWeather(json);
      
            
        })()
    },[props.name])


    return(
        <>
        <ul>
            {props.areas.map(area=><li
            onClick={()=>setSelected(area)}
            key={area.id}
            >
                {area.name}
            </li>)}
        </ul>
                {selected?.areas?.length&&
                <Section key={selected.id} areas={selected.areas}/>}
        </>
        
    )

}