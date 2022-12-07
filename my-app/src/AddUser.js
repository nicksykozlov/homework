
import { Link,  } from "react-router-dom";


export default function AddUser(){

     const newUser ={
      name: "",
      job:""
     }
     const AddUser = async ()=>{
      
      const response = await fetch(`https://reqres.in/api/users`,{
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {'Content-Type': 'application/json' },
          
        })
       
        // alert(`Post user id ${id} successful`)
        
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
    


