import axios from 'axios'
import React, { useState } from 'react'

export default function Login() {
      const[username,setusername]=useState()
      const[email,setemail]=useState()
   const handlesubmit= ()=>{

   
  const payload={

     username:username,
     email:email
   }
     axios.post('https://jsonplaceholder.typicode.com/users',payload)
    
   .then((res)=>{
     
    console.log("login successful",res)
   })   
   .catch((err)=>{
    console.log("login failed",err)
   })


}
  
  return (
   <>

  <section className='bg-black'>
    <div className="flex items-center justify-center min-h-screen">
<div className="bg-white  text-black w-110 shadow-2xl shadow-gray-700 rounded 2xl p-8">
    <h1 className="text-4xl text-center font-semibold p-6">LOGIN</h1>
   
    <h1 id="mainmsg" className="text-2xl"></h1>
Username:
 <input onChange={(e)=>setusername(e.target.value)}className="w-full text-center px-2 py-2 border rounded-lg" type="text" placeholder="Enter username" id="uname"/>
 <h5 id="msg"></h5><br/>

 Email:
<input onChange={(e)=>setemail(e.target.value)}  className="w-full text-center px-2 py-2 border rounded-lg" type="email" placeholder="Enter password" id="pass"/>
 <h1 id="msg2"></h1><br/>
 
 <button onClick={handlesubmit} className="w-full text-center p-2 bg-blue-600 mt-4 border rounded-lg">Login</button>
 

 <h1 id="check3"></h1>
</div>
    </div>
   </section>
   
   
</>  )
}

