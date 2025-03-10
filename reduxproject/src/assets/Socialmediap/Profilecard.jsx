import React from 'react'

export default function Profilecard() {
  return (
    <div className='bg-gray-600 p-4 rounded-2xl w-2xl '>
      <div className='flex'>
      <div className="">
        <img src="profile-picture.jpg" alt="Profile Picture" />
      </div>
      <div className="profile-input">
        <input type="text" placeholder="Start a post" className='pe-48 ml-6 border w-full py-1 rounded-2xl' />
      </div>
      </div>
      <div className="mt-4 mb-2">
        <ul className="flex justify-around">
          <li><a href="#">Media</a></li>
          <li><a href="#">Contribute Expertise</a></li>
          <li><a href="#">Write Articles</a></li>
        </ul>
      </div>
    </div>
  )
}