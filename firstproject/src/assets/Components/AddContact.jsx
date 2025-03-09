import React, { useState } from 'react'
import Contactdetail from './Contactdetail'
var contactlist=[ {fullname:"shikharsaini",email:"shikhar143@gmail.com",number:"4567474654"},
    {fullname:"Bhupendradayne",email:"bhupendra143@gmail.com",number:"4567474689"},
    {fullname:"pawanrathore",email:"pawan143@gmail.com",number:"4567474676"},
    {fullname:"ritupatel",email:"ritu143@gmail.com",number:"4567474659"},
    {fullname:"sanskarsharma",email:"sanskar143@gmail.com",number:"4567474680"},
]
export default function AddContact() {
    const [listofContact,setContactlist]=useState(contactlist)
    const deletecontact=(index)=>{
        listofContact.splice(index,1)
        setContactlist(...listofContact)
    }
    
    
    const [fullname,setFullname]=useState("")
    const [email,setEmail]=useState("")
    const [number,setNumber]=useState("")
  return (<>
  
  <div className='flex'>
  <div className=' bg-white shadow-2xl shadow-black w-100 h-80 p-2 mt-5 text-center mr-4'>
    <h1 className='text-2xl font-bold text-center mb-5 mt-5'>Add Contact</h1>
    <input className='text-2xl font-semibold text-center mb-3' type='text' placeholder='Fullname' onChange={(e)=> setFullname(e.target.value)} value={fullname}/><br/>
    <input className='text-2xl font-semibold text-center mb-3' type='email' placeholder='Email' onChange={(e)=> setEmail(e.target.value)} value={email}/><br/>
    <input className='text-2xl font-semibold text-center mb-3' type='tel' placeholder='Number' onChange={(e)=> setNumber(e.target.value)} value={number}/><br/>
    <button className='rounded-2xl bg-black text-white text-2xl mt-3' onClick={()=>{
        setContactlist([...listofContact,{
         fullname:fullname,
         email:email,
         number:number
        }])
        setFullname("")
        setEmail("")
        setNumber("")
      }} >Submit</button> 
  </div>
  <div className='bg-cyan-200 h-screen w-screen font-semibold'>    
      {
        listofContact.map((data,index)=>
            <Contactdetail fullname={data.fullname}
            email={data.email}
            number={data.number}
            index={index}
            deleteentry={deletecontact}/>
            
      )}
      
  </div>

  </div>
  
  </>
    
  )
}
