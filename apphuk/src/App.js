import React, { Fragment, useState, useEffect } from 'react';
import UserProfile from './UserProfile';
import Table from './Table';
import './App.css'

function App() {
 
  const [user, setUser] = useState([]);
  const [selectedUser, setSelectedUser]= useState()
  

  useEffect(()=>{
    async function loadData(){
    const response= await fetch('http://dummyjson.com/users');
    const json = await response.json()
    setUser(json.users)
  }
  loadData();
},[])

  return(
   <Fragment>
    <UserProfile userId ={selectedUser}/>
    <Table
    users={user}
    onSelectUser={(id)=>setSelectedUser(id)}
    selectedUserId={selectedUser}
    />

   </Fragment>
  )
}
export default App
