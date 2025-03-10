import React from 'react'
import UserProfile from './UserProfile'
import Profilecard from './Profilecard'
import Insights from './Insights'
import Postsection from './Postsection'

export default function Home() {
  return (
    <div>
      <div className='flex gap-5 m-5 text-white '>
          <UserProfile/>
           <div>
          <Profilecard/>
          <Postsection/>
          </div>
          <Insights/>
          </div>
    </div>
  )
}