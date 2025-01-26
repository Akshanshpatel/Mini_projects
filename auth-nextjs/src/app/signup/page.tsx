"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import toast from "react-hot-toast";
import axios from 'axios';



export default function Signup(){
    const router=useRouter();
    const [user,setUser]=React.useState({
        email:"",
        password:"",
        username:"",
    })
    const [buttonDisabled,setButtonDisabled]=React.useState(false);
    const [loading,setLoading]=React.useState(false);


    const onSignup=async ()=>{
      try {
        setLoading(true);
        const response=await axios.post("/api/users/signup",user);
        router.push("/login"); 
        console.log(response.data);
        
      } catch (error:any) {
        toast.error(error.message)
      }finally{
        setLoading(false);
      }
    }

    useEffect(()=>{
      if(user.email.length>0 && user.password.length>0 && user.username.length>0){
        setButtonDisabled(false);
      } else{
        setButtonDisabled(true);
      }
    },[user]);
    

    return (
            <div className="text-center text-white text-2xl"><h1>{loading ? "Processing" : "Loading"}</h1>
            
            <hr className="my-4 border-gray-300" />

            <label htmlFor="username">Username:</label>
            <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black" 
            type="text"
             id="username"
             value={user.username}
             onChange={(e)=> setUser({...user,username:e.target.value})} 
            placeholder="username"
              />
<hr className="my-4 border-gray-300" />

        <label htmlFor="email">Email:       </label>
            <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600  text-black" 
             type="text"
             id="email"
             value={user.email}
             onChange={(e)=> setUser({...user,email:e.target.value})} 
            placeholder="email"
              />
              <hr className="my-4 border-gray-300" />

            <label htmlFor="password">Password:</label>
            <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600  text-black" 
             type="password"
             id="password"
             value={user.password}
             onChange={(e)=> setUser({...user,password:e.target.value})} 
            placeholder="password"
              />
              <hr className="my-4 border-gray-300" />

            <button onClick={onSignup}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 ">{buttonDisabled ? "No signup" : "Signup"}</button>
            <hr className="my-4 border-gray-300" />
            <Link href="/login">Visit Login Page</Link>



            </div>
    )
}