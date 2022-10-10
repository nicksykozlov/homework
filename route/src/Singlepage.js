
import {useParams} from 'react-router-dom'

import React, {useEffect, useState } from 'react'

export default function SinlglPage(){
const {id} = useParams()
const [info, setInfo] = useState()

useEffect(()=>{
    (async()=>{
        const response = await fetch(`https://dummyjson.com/users/${id}`)
        const json = await response.json()
        setInfo(json.users)
    })()
},[id])


    return(
        <div>
            
            {<p>{info.age}</p>} 
                
               
              
               
           
           
        </div>
    )

}