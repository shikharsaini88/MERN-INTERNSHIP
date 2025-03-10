import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function UserProfile() {
    const [user, setUser] = useState({});
  const username = localStorage.getItem('username');

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users?username=${username}`)
      .then(response => {
        setUser(response.data[0]);
      })
      .catch(error => {
        console.error(error);
      });
  }, [username]);
  return (
    
    <div className=''> 
      <div className='bg-gray-600 px-10 py-4 pb-20 rounded-2xl w-2xs ml-24'>
       <h1 className='flex justify-center text-2xl font-bold font-serif'>Profile</h1>
       <div className='flex justify-center py-1'>
      <img src={`https://picsum.photos/200/300?random=${user.id}`} alt={user.username}  className='w-15 h-15 rounded-4xl'/>
      </div>
      <h2 className='text-xl font-bold flex justify-center py-0.5'>{user.name}</h2>
      <p className='flex justify-center py-0.5'>Email: {user.email}</p>
      <p className='flex items-center ml-5 py-0.5'>Phone: {user.phone}</p>
    </div>
    </div>
    
  
  )
}