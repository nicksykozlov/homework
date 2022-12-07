import React,{useEffect, useState, } from 'react'
import {useParams} from 'react-router-dom'
import { Link,  } from "react-router-dom";
//use params

export default function User (){
    const {id} = useParams()
    const [user, setUser] = useState([])
    useEffect(()=>{
        (async()=>{
            const response = await fetch(`https://reqres.in/api/users/${id}`)
            const json = await response.json()
            setUser(json.data)
            
        })()
    },[id])

   
   
        const DeleteUser = (id)=>{
          
           fetch(`https://reqres.in/api/users/${id}`,{
            method:"DELETE",
            headers: {
                'Content-Type': 'application/json'
              },
           }) 
           alert(`Delete user id ${id} successful`)
                     
        }

        


  
   return(
    <>
    <div>
    <Link to={'/'}>Users</Link>
    

    </div>
        <h3>{user.first_name}</h3>
        <p>{user.last_name}</p>
        <p>{user.email}</p>
        <img src={user.avatar} alt="#"/>

        <button onClick={()=>DeleteUser(user.id)}>Delete User</button>
        {/* обязательно передать id user */}
        <button>Edit User</button>
        

    </>
    
   ) 

}

