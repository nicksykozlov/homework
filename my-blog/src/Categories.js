// категори 
import React,{useEffect, useState } from 'react'

export default function Categories(){

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        (async()=>{
            const response = await fetch(`http://192.168.0.158:3000/categories`)
            const json = await response.json();
            setCategories(json)
        })()
    },[])
    
    return (
        <div className='category'>
            <h3>Categories</h3>
        <article>


            {categories.map(categoria=>
          <a href="#">{categoria.title}</a>
            
            )
            
            }
        </article>
        </div>
    )

}