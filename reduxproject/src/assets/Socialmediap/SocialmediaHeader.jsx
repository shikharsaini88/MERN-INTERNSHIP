import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router'
import Home from './Home';
import axios from 'axios';

export default function SocialmediaHeader() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState({ });
  const navigate = useNavigate();
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
  const handleLogoutClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleViewProfileClick = () => {
    navigate('/profile');
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    navigate('/login');
  };
  return (
    <>
    <header className="flex justify-between px-28 py-3 bg-gray-700">
      <div className="flex">
        <img src="linkedin-logo.png" alt="" />
        <input type="search" placeholder="Search" />
      </div>
      <div className="">
        <nav className="flex">
          <h1 className="mr-6">
            <NavLink to="/SocialmediaHeader" activeClassName="active">
              Home
            </NavLink>
          </h1>
          <h1 className="mr-6">
            <NavLink to="/Profile" activeClassName="active">
              Profile
            </NavLink>
          </h1>
          <h1 className="mr-6 relative" onClick={handleLogoutClick}>
            Logout
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                <div className="flex items-center px-4 py-2">
                  <img src={user.image} alt={user.username} className="w-10 h-10 rounded-full" />
                  <div className="ml-4">
                    <h2 className="font-bold">{user.username}</h2>
                    <p className="text-gray-600">{user.body}</p>
                  </div>
                </div>
                <button className="block w-full px-4 py-2 text-left text-gray-600 hover:bg-gray-100" onClick={handleViewProfileClick}>
                  View Profile
                </button>
                <div className="border-t border-gray-200 my-2"></div>
                <div className="px-4 py-2">
                  <h2 className="font-bold">Account</h2>
                  <ul>
                    <li className="text-gray-600 hover:bg-gray-100 py-2">
                      <NavLink to="#">Settings & Privacy</NavLink>
                    </li>
                    <li className="text-gray-600 hover:bg-gray-100 py-2">
                      <NavLink to="#">Help</NavLink>
                    </li>
                    <li className="text-gray-600 hover:bg-gray-100 py-2">
                      <NavLink to="#">Language</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="border-t border-gray-200 my-2"></div>
                <button className="block w-full px-4 py-2 text-left text-red-600 hover:bg-red-100" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </h1>
        </nav>
      </div>
    </header>
    <Home/>
    </>
  )
}