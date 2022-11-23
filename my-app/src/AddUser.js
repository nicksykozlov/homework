import React,{useEffect, useState, } from 'react'
import {Form, useParams} from 'react-router-dom'
import { Link,  } from "react-router-dom";


export default function AddUser(){

    
    // const sendUser =()=>{
    //   const form = document.querySelector('form')
    //   const data ={
    //     name:"kdshfd",
    //     job: 'dfkl;vnf;'
    //   }
    // }
 



    const AddUser = async (data)=>{
      
      const response = await fetch(`https://reqres.in/api/users`,{
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        if (!response.ok){
          throw new Error(`Статус ошибки ${response}`)
        }
        return await response.json()

    
    }

    
    
  
    return(
      <>
      <Link to={'/'}>Users</Link>
        <form>
           
        <input type="text" name="name" id=""placeholder='Enter the Name' />
        <input type="text" name="job" id=""placeholder='Enter the Job' />
        <button onClick={()=>AddUser()}>Add New User</button>
        </form>
        </>
    )

    
   
    
}
    


