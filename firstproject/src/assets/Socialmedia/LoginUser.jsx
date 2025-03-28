 import axios from "axios";
import { useState } from "react"
import { useNavigate} from "react-router-dom"

export default function LoginUser() {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  const handleLogin = (event) => {
    event.preventDefault();
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
      const user = response.data.find(user => user.username === username);
      if (user && user.email === password) {
        localStorage.setItem('username', username);
        navigate("/Dashboard"); // Correct usage of useNavigate
      } else {
       
        setError('Invalid username or password');
      }
      })
      .catch(error => {
      setError(error.message);
      });
    };

    return (
    <section className="bg-black h-full text-white">
    <div className="  flex justify-center items-center    ">
      <div className="p-22 shadow-2xl shadow-blue-600 rounded-2xl my-18"><h1 className="text-4xl font-bold pl-10 mb-5 animate-pulse">Login Page</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form className="" onSubmit={handleLogin}>
      <input name="username" className="font-semibold text-3xl mb-5 ml-5 pl-5 bg-white rounded-2xl text-black" type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Username" /><br/>
      <input name="password" className="font-semibold text-3xl mb-5 ml-5 pl-5 bg-white rounded-2xl text-black" type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" /><br/>
      <button type="submit" className="font-medium text-2xl ml-10 bg-red-300 text-amber-50 rounded-2xl p-1.5 " >Login</button>
      </form>
      </div>
    </div>
    </section>
    )
  }
