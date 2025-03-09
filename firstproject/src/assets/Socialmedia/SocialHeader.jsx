import React from 'react'

function SocialHeader() {
  return (
   <>
   <header className='h-[8vh] text-white w-full flex justify-around items-center bg-blue-950'>
     <div> <h1 className='text-3xl'>DashBoard</h1></div>
     <div><nav>
      <a className='m-2 border-2 px-2 py-1 rounded' href="">Home</a>
      <a className='m-2 border-2 px-2 py-1 rounded' href="">Profile</a>
      <a  href="">Logout</a>
      </nav></div>
    </header>
   </>
  )
}

export default SocialHeader