// Это компонент должен показать один блог

import React,{useEffect, useState} from 'react'

export default function Posts(){

const [news, setNews]= useState([])

useEffect(()=>{
    (async()=>{
      const response = await fetch(`http://192.168.0.157:3000/posts/id`);
      const json = await response.json();
      setNews(json)
    })()
  },[])
  

return(
    <div>
   
    
    </div>
)


}