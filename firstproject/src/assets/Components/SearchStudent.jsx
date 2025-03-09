import React, { useState } from 'react'
import { filter } from './StudentSlice'
import { useDispatch } from 'react-redux'

export default function SearchStudent() {
    const[inputValue,setInputvalue]=useState("")
    const dispatch=useDispatch()
  return (
   <>
   <div>
<input className='border-2 w-80 mt-2' placeholder='enter name' onChange={(e)=>setInputvalue(e.target.value)} value={inputValue}></input>
<button className='bg-blue-400 p-2 rounded-lg ' onClick={()=>dispatch(filter(inputValue))}>Search</button>

   </div>
   
   </>


  )
}
