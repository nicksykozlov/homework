import SignUpForm from "./SignUp";
import SignInForm from "./SignIn";
import {useState} from "react";

export default function Auth({setToken}) {
    const [mode, setMode] = useState(false)
    return (
        <div className='auth'>
            <div className="header">
                <h3 onClick={()=>setMode(true)} className={mode ? 'active' : ''}>SignIn</h3>
                <h3 onClick={()=>setMode(false)} className={!mode ? 'active' : ''}>SignUp</h3>
            </div>
            {mode ? <SignInForm setToken={setToken}/> : <SignUpForm setToken={setToken}/>}


        </div>
    )
}