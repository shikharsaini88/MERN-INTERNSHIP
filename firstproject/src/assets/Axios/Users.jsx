import React, { useEffect, useState } from 'react'

import axios from 'axios'
import Usersdetails from './Usersdetails'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, selectUser } from './UserSlice'
export default function Users() {

    const[listofuser,setlistofuser]=useState([])
    // const[selectedUser,setSelectedUser]=useState(null)
    const dispatch=useDispatch()
    const listofUsers=useSelector(state=>state.user.list)
    const selectedUser=useSelector(state=>state.user.selectedUser)
    useEffect(()=>{
        
            dispatch(fetchUsers())
        }
    
    ,[])
  return (
   <>
    <div className='flex'>
        <div className='w-1/3'>
    {
        listofUsers.map((user)=><div key={user.id} onClick={()=>{console.log("on click working")
        dispatch(selectUser(user))} } className='w-full m-4 shadow-sm shadow-gray-600 rounded-2xl px-3 py-2'><h1 className='text-2xl font-extrabold'>{user.name}</h1>
</div>)
}
</div>
{
    selectedUser!=null && <div className='w-full'>
        <Usersdetails user={selectedUser}
        />
        </div>
}    
   </div> 

   </>
  )
}
