import React from 'react'
import LoggedInUser from './LoggedInUser'
import UserPosts from './UserPosts'
import SocialmediaHeader from './SocialmediaHeader'
import UserPostCount from './UserPostCount'

export default function Profile() {
  return (
    <div className='flex px-40'>
      <LoggedInUser/>
      <UserPosts/>
      <UserPostCount/>
    </div>
  )
}