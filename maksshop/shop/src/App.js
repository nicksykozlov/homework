import Header from "./components/Header";
import {RouterProvider} from "react-router-dom";
import router from "./Router";
import React from "react";
import useToken from "./components/auth/useToken";
import Auth from './components/auth/Auth'

export default function App() {
    const { token, setToken } = useToken();
    if(!token) {
       return <Auth setToken={setToken}/>
    }
    return (<>

        <Header/>
        <div className="container">
            <RouterProvider router={router}/>
        </div>
    </>)
}