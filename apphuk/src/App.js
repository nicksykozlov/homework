import React, { Fragment, useState, useEffect } from 'react';
import UserProfile from './UserProfile';
import Table from './Table';
import './App.css'
import Pagination from './Pagination';

function App() {
 
  const [user, setUser] = useState([]);
  const [selectedUser, setSelectedUser]= useState()
  const [curentPage, setCurentPage]=useState(1)
  const [userPerpage]=useState(10)
  useEffect(()=>{
    async function loadData(){
    const response= await fetch('http://dummyjson.com/users');
    const json = await response.json()
    setUser(json.users)
  }
  loadData();
},[])
const lastUser = curentPage * userPerpage;
const firstUser = lastUser - userPerpage;
const currentUser = user.slice(firstUser, lastUser) 

const paginate = pageNumber =>setCurentPage(pageNumber)
const nextPage = ()=>setCurentPage(prev=>prev+1)
const prevPage = ()=>setCurentPage(prev=>prev-1)

  return( 
   <Fragment>
    <UserProfile userId ={selectedUser}/>
    <Table
    users={currentUser}
    onSelectUser={(id)=>setSelectedUser(id)}
    selectedUserId={selectedUser}
    />
    <Pagination
    userPerpage = {userPerpage}
    totalUser = {user.length}
    paginate={paginate}
    />

    <button className='btn' onClick={prevPage}>Prev Page</button>
    <button className='btn' onClick={nextPage}>Next Page</button>
   </Fragment>
  )
}
export default App
