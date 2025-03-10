import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Postsection() {
    const [posts, setPosts] = useState([]);
  const username = localStorage.getItem('username');

  useEffect(() => {
    if (username) {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          setPosts(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [username]);
  return (
    <div className='w-2xl'>
       {username ? (
        <div>
          
          <ul>
            {posts.map(post => (
              <li key={post.id} className='p-15 border-gray-300 border m-10 rounded-2xl bg-gray-600'>
                <h2 className='font-bold text-2xl '>{post.title}</h2>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Please log in to view posts.</p>
      )}
    </div>
  )
}