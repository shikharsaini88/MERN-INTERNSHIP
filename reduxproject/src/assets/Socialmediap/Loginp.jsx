import axios from 'axios';
import React, { useState } from 'react'
import {  useNavigate } from 'react-router';

export default function Loginp() {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const user = response.data.find(user => user.username === username);
        if (user && user.email === password) {
          localStorage.setItem('username', username);
          history('/socialmediaHeader');
        } else {
          setError('Invalid username or password');
        }
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <div className='flex justify-center items-center h-screen bg-[url("https://png.pngtree.com/thumb_back/fw800/background/20190223/ourmid/pngtree-modern-technology-intelligent-ai-era-background-design-backgroundintelligent-ai-technologypsd-image_75384.jpg")] bg-cover'>
      <div className='p-20 shadow-2xl shadow-white rounded-2xl backdrop-blur-xs '>
      <h1 className='text-center text-2xl font-bold bg-gradient-to-bl from-cyan-800 to-blue-700 bg-clip-text text-transparent'>Login Page</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <input className='my-3 h-8 w-full border border-gray-800 p-2 bg-gradient-to-bl from-cyan-700 to-white' type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Username" /><br/>
        <input className='my-3 h-8 w-full border border-gray-800 p-2 bg-gradient-to-bl from-cyan-700 to-white' type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" /><br/>
        <button className='py-1 px-4 border border-black rounded-2xl w-full bg-gradient-to-bl from-cyan-950 to-blue-500 text-white' type="submit">Login</button>
      </form>
      </div>
    </div>
  )
}