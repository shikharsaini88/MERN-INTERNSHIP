import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function UserPostCount() {
    const [postCount, setPostCount] = useState(0);
  const username = localStorage.getItem('username');

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users?username=${username}`)
      .then(response => {
        const userId = response.data[0].id;
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
          .then(response => {
            setPostCount(response.data.length);
          })
          .catch(error => {
            console.error(error);
          });
      })
      .catch(error => {
        console.error(error);
      });
  }, [username]);

  return (
    <div className='text-white'>
      <div className='bg-gray-600 p-20 rounded-2xl flex justify-center'>
      <h2 className=''>Post Count: {postCount}</h2>
      </div>
    </div>
  )
}