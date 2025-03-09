import React, { useEffect } from 'react'
import { useState } from 'react'
import AddContact from './AddContact'
const contactlist=[{fullname:"shikharsaini",email:"shikhar143@gmail.com",number:"4567474654"},
    {fullname:"Bhupendradayne",email:"bhupendra143@gmail.com",number:"4567474689"},
    {fullname:"pawanrathore",email:"pawan143@gmail.com",number:"4567474676"},
    {fullname:"ritupatel",email:"ritu143@gmail.com",number:"4567474659"},
    {fullname:"sanskarsharma",email:"sanskar143@gmail.com",number:"4567474680"},]
export default function Search()
 {
   const [Search,setSearch]=useState("")
    const filteredContacts= 
    contactlist.filter((contact)=>
        contact.fullname.toLowerCase().includes(Search.toLowerCase()) || contact.number.includes(Search))
    
  return (
   <>
   <div className='max-w-lg mx-auto p-3 bg-black'>
    <input type='search' placeholder='search by name or number' className='w-full p-2 border border-gray-300 rounded-lg mb-3 text-white' value={Search} onChange={(e)=>setSearch(e.target.value)}/>
   <ul className='bg-white shadow-md rounded-lg p-4'>
    {filteredContacts.length>0?(filteredContacts.map((contact,index)=><li key={index} className='border-b last:border-none-2'><strong>{contact.fullname}</strong><br/><span className='text-gray-600'>{contact.number}</span></li>)):(<li className='text-gray-500'>No results found</li>)}
   </ul>
   </div>
   </>
  )
}

