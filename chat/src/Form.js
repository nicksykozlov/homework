import React, { useState } from 'react';

export default function Form(props){
    const [text, setText] = useState("")
    function sendMessages (e){
        e.preventDefault();
        fetch('http://192.168.0.148:3000/messages',{
            method: 'POST',
            body: JSON.stringify({
                text,
                userId: props.userId
            }),
            headers: {
                'Content-type': "application/json",
                "Accept": "application/json"
            }
        })
        
    }
    return(
        <form onSubmit={sendMessages}>
            <textarea 
             rows="3"
             onChange={(e)=>setText(e.target.value)}
             />
             <input type="submit" value='Send' />
        </form>
    )

}