"use client";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import axios from "axios";



export default function LoginPage(){
    const [user,setUser]=React.useState({
        email:"",
        password:"",
        
    })

    const onLogin=async ()=>{

    }

    

    return (
            <div className="text-center text-white text-2xl"><h1>Login</h1>
            
            <hr className="my-4 border-gray-300" />

        <label htmlFor="email">Email:       </label>
            <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" 
             type="text"
             id="email"
             value={user.email}
             onChange={(e)=> setUser({...user,email:e.target.value})} 
            placeholder="email"
              />
              <hr className="my-4 border-gray-300" />

            <label htmlFor="password">Password:</label>
            <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black" 
             type="password"
             id="password"
             value={user.password}
             onChange={(e)=> setUser({...user,password:e.target.value})} 
            placeholder="password"
              />
              <hr className="my-4 border-gray-300" />

            <button onClick={onLogin}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Login</button>
            <hr className="my-4 border-gray-300" />
            <Link href="/signup">Visit Signup Page</Link>



            </div>
    )
}