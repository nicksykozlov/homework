// Этот компонент показывает весь список блога
import './App.css';
import Posts from './Posts';
import React,{useEffect, useState} from 'react'

export default function App() {

const [posts, Setposts]= useState([])  
console [blog, setBlog] = useState()

useEffect(()=>{
  (async()=>{
    const response = await fetch(`http://192.168.0.157:3000/posts`);
    const json = await response.json();
    Setposts(json)
  })()
},[])



  return (
    <div className="App">
      <ul>
        {posts.map(posts=><li key={posts.id}>
          <h1>{posts.id}</h1>
          <p>{posts.text}</p>
          <img src={posts.image} alt="" />
          <button>Read Post</button>
        </li>)}
      </ul>
    </div>
  );
}


