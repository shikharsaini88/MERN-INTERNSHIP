import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteStudent } from './StudentSlice'

export default function Studentsdetail({name,Surname,age,City,Address,index}){
 const dispatch=useDispatch()
  return (<> 
  <div className=' flex-col shadow-lg shadow-gray-400 items-center justify-center pb-2 text-black w-140'>
 <h1 className='font-semibold text-2xl'>name:{name} </h1>
 <h1 className='font-semibold text-2xl'>surname:{Surname}</h1>
 <h1 className='font-semibold text-2xl'>Age:{age}</h1>
 <h1 className='font-semibold text-2xl'>city:{City}</h1>
 <h1 className='font-semibold text-2xl'>address:{Address}</h1><br/>
  <button className='bg-blue-400 rounded-2xl text-white' onClick={()=>dispatch(deleteStudent(index))}>Delete</button>
 {/* <button onClick={()=>deleteEntry(index)}>delete</button> */}
  </div>
  
  
  
  </>
  )
}
