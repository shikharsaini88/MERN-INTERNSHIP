import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function UserPosts() {
    const [posts, setPosts] = useState([]);
  const username = localStorage.getItem('username');
  const [activeTab, setActiveTab] = useState('posts');
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users?username=${username}`)
      .then(response => {
        setUser(response.data[0]);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        const userPosts = response.data.filter(post => post.userId === user.id);
        setPosts(userPosts);
      })
      .catch(error => {
        console.error(error);
      });
  }, [username, user.id]);
  return (
    <div className='text-white px-1.5 w-2xl me-5 ml-5'>
      <h2 className='text-2xl'>All Activity</h2>
      <div className=" y-2">
        <div className='my-8'>
        <button className="px-9 border rounded-3xl py-1.5 me-1 hover:bg-green-800 transition-all " onClick={() => setActiveTab('posts')}>Posts</button>
        <button className="px-9 border rounded-3xl py-1.5 me-1  hover:bg-green-800 transition-all" onClick={() => setActiveTab('comments')}>Comments</button>
        <button className="px-9 border rounded-3xl py-1.5 me-1 hover:bg-green-800 transition-all" onClick={() => setActiveTab('images')}>Images</button>
        <button className="px-9 border rounded-3xl py-1.5 me-1 hover:bg-green-800 transition-all" onClick={() => setActiveTab('reactions')}>Reactions</button>
        </div>
      </div>
      {activeTab === 'posts' && (
        <div className="me-5 ml-5">
          {posts.map(post => (
            <div key={post.id} className='p-5 border-gray border mb-5 rounded-2xl hover: shadow-gray-400 hover:shadow-2xl transition-all'>
              <h3 className='text-2xl font-bold'>{post.title}</h3>
              <p className='text-xl font '>{post.body}</p>
            </div>
          ))}
        </div>
      )}
      {activeTab === 'comments' && (
        <div className="comments">
          {/* Comments will be displayed here */}
        </div>
      )}
      {activeTab === 'images' && (
        <div className="images">
          {/* Images will be displayed here */}
        </div>
      )}
      {activeTab === 'reactions' && (
        <div className="reactions">
          {/* Reactions will be displayed here */}
        </div>
      )}
    </div>
  )
}