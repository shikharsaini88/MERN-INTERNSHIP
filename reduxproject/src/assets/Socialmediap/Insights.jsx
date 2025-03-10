import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Insights() {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState({});
    const username = localStorage.getItem('username');
  
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          const filteredUsers = response.data.filter(user => user.username !== username);
          setUsers(filteredUsers);
        })
        .catch(error => {
          console.error(error);
        });
  
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          const postsCount = {};
          response.data.forEach(post => {
            if (!postsCount[post.userId]) {
              postsCount[post.userId] = 0;
            }
            postsCount[post.userId]++;
          });
          setPosts(postsCount);
        })
        .catch(error => {
          console.error(error);
        });
    }, [username]);
  return (<>
    <div className='w-2xs'>
      <div className='bg-gray-600 pl-5  py-2.5 rounded-2xl px-20'>
      <h1 className='text-2xl font-bold font-serif'>Insights</h1>
      <ul className=''>
        {users.map(user => (
          <li key={user.id} className='py-2'>
            <div className='flex'>
            <img src={`https://picsum.photos/50/50?random=${user.id}`} alt={user.username} className='w-10 h-10 rounded-4xl'/>
            <h2 className='flex items-center ml-1.5 text-xl font-semibold'>{user.username}</h2>
            </div> 
            <p>Number of posts: {posts[user.id] || 0}</p>
          </li>
          
        ))}
      </ul>
      </div>
    </div>
</>  )
}