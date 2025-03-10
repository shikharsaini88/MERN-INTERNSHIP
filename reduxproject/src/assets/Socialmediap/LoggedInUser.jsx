import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function LoggedInUser() {
    const [user, setUser] = useState({});
  const username = localStorage.getItem('username');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users?username=${username}')
      .then(response => {
        setUser(response.data[0]);
      })
      .catch(error => {
        console.error(error);
      });
  }, [username]);
  return (
    <div className='text-white'>
      <div className='bg-gray-600 w-xs p-3 rounded-2xl pb-10 pt-5'>
      <h2 className='flex justify-center text-xl font-semibold font-serif'>Logged In User</h2>
      <div className='flex justify-center'>
      <img src={`https://picsum.photos/200/300?random=${user.id}`} alt={user.username} className='w-15 h-15 rounded-4xl'/>
      </div>
      <p className='flex justify-center text-2xl font-bold'>Name: {user.name}</p>
      <p className='flex justify-center'>Email: {user.email}</p>
      <p className='flex justify-center'>Phone: {user.phone}</p>
    </div>
    </div>
  )
}