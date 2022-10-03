// список одного поста 
import React,{useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function Posts(){
    const {id} = useParams()
    const [post, setPost]=useState([]);

    useEffect(()=>{
        (async()=>{
        const response = await fetch(`http://192.168.0.158:3000/posts + id`);
        const json = await response.json();
        setPost(json);
    })()
    },[id])

   return(
    <div>
        <ul>{
            post.map(pos=>
            <li key = {pos.id}>
                {pos.title}
                <button>Back</button>
            </li>)
            
            }</ul>
    </div>
   ) 

}