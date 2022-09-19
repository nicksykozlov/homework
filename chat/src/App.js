import React, { useState, Fragment } from 'react';
import Auth from './Auth';
import List from './List';
import Form from "./Form"

export default function App(){
  const [user, setUser] = useState()

  return (
  <Fragment>
    {!user&& < Auth onSelectUser={setUser}/>}
    {user&&<List/>}
    {user&& < Form userId={user.id}/>}
  </Fragment>
  )
}



