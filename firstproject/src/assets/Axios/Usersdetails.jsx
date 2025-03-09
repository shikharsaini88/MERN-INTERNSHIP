import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteUser } from './UserSlice'

export default function Usersdetails({user}) {
  const dispatch=useDispatch()
  let{street,suite,zipcode,city

  }=user.address
  return (<>
  <div className='shadow-2xl rounded-3xl shadow-gray-500 ml-10 mt-10 font-bold'>
  <h1 className='text-2xl'>Id: {user.id}</h1>
    
    <h1 className='text-2xl'>{user.name}</h1>
  
    <h1 className='text-2xl'>{user.email}</h1>
    <h1 className='text-2xl'>street:{street} suite:{suite}<br/> zipcode:{zipcode}city:{city}</h1>
<button className='bg-blue-400 p-2 rounded-2xl ml-2'onClick={()=>dispatch(deleteUser(user.id))}>Delete</button>
  </div>
  
  </>
   
  )
}
