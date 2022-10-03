// Это компонент должен показать один блог

import React,{useEffect, useState} from 'react'

export default function Posts(setBlog, props){

const [news, setNews]= useState([])

useEffect(()=>{
    (async()=>{
      const response = await fetch(`http://localhost:3000/posts/${props.id}`);
      const json = await response.json();
      setNews(json)
    })()
  },[props])
  
  function handelBack(){
    setBlog()
}


return(
  <div 
  key={news.id}
>
  <img src={news.image} alt={news.id} />
  <h1>Blog {news.id}</h1>
  <section>{news.text}</section>
  <button className='btn-blog'
  onClick={()=>handelBack()}
  >Назад</button>



</div>
)


}