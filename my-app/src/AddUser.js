import React,{useEffect, useState, } from 'react'
import {Form, useParams} from 'react-router-dom'
import { Link,  } from "react-router-dom";


export default function AddUser(){

    const [newUser, setNewUser] = useState([])


    function AddUser(){
   
        (async()=>{
          const data = {
            name:"Morhus",
            job:"Leader"

          }  
          const response = await fetch(`https://reqres.in/api/users`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          const json = await response.json()
          setNewUser(json.data)
          console.log(json.data);
        })()
       }

    
    
  
    return(
        <div>
           
        <input type="text" name="name" id=""placeholder='Enter the Name' />
        <input type="text" name="job" id=""placeholder='Enter the Job' />
        <button onClick={()=>AddUser()}>Add New User</button>
        </div>
    )


   
    
}
    


