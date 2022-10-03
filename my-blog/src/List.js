// вывожу список постов

import React,{useEffect, useState } from 'react'

export default function List(){

    const [list, setList]= useState([])

    useEffect(()=>{
        (async()=>{
            const response = await fetch(`http://192.168.0.158:3000/posts`)
            const json = await response.json();
            setList(json);
        })()
    },[])

    return(
        <div className='list'>
            <ul>{
                list.map(post=><li key={post.id}>
                    {post.title}
                    <p>{post.paragraphs}</p>
                <img src={post.image}/>
                <button>Read</button>
                </li>)
                }

            </ul>
        </div>
    )
    
    
}