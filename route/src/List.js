
import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function List(){

     const [list, setList]= useState([])

    useEffect(()=>{
        (async()=>{
            const response = await fetch('https://dummyjson.com/users');
            const json = await response.json();
            setList(json.users)
        })()
    },[])

    return(
        <div>
            <ul>{
            list.map(users=><Link key={users.id} to={`/${users.id}`}>
            <li>
            {users.firstName} {users.lastName}
                                                
                </li></Link>)
                }
                </ul>
        </div>
    )
}