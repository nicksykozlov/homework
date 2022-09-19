import React, { useState, useEffect } from 'react';


export default function Auth (props){
    const [user, setUser] = useState([]);
    useEffect(()=>{
        (async()=>{
            const response = await fetch('http://192.168.0.148:3000/users');
            const json = await response.json()
            setUser(json); 
        })()
    },[])

    return(
        <div>
            <h1>Выберите пользователя</h1>
            <ul>
                {user.map(user => <li
                key={user.id}>
                    {user.name}
                    <img src={user.avatar} />
                    <button onClick={()=>props.onSelectUser(user)}>Select User</button>
                </li>)}
            </ul>
        </div>
    )
}
