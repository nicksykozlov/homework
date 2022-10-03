// Этот компонент показывает весь список блога
import './App.css';
import Posts from './Posts';
import React,{useEffect, useState} from 'react'


export default function App() {

const [posts, Setposts]= useState([])  
const [blog, setBlog] = useState()

useEffect(()=>{
  (async()=>{
    const response = await fetch(`http://localhost:3000/posts`);
    const json = await response.json();
    Setposts(json)
  })()
},[])

function handelClick(id) {
  setBlog(id);
  
}


  return (
    <div className="App">

{posts ? <Posts blog={blog} setBlog={setBlog} />:
      <ul>
      

        {posts.map(posts=><li key={posts.id}>
          <h1>{posts.id}</h1>
          <p>{posts.text}</p>
          <img src={posts.image} alt="" />
          <button onClick={() => handelClick(posts.id)}>Read Post</button>
        </li>)}
      </ul>
}
    </div>
  );
}


