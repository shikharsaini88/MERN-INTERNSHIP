import React, { useState } from 'react'

export default function EventEx() {
   const [mystudent,setmyStudent]=useState({

    name:"raj",
    surname:"sharma",
   })
   const handleClickEvent=()=>{
    setmyStudent({
      name:"ajay",
      surname:"bhagat"
    })
    
   }
   const changeNamehandler=()=>{
    setmyStudent({
      ...mystudent,
      name:"raj"
    })
   }
   const changeSurnamehandler=()=>{
    setmyStudent({
      ...mystudent,
      surname:"verma"
    })
   }
    
  return (<>
  <div>
    <h1 className='text-3xl font-bold'>{mystudent.name}{mystudent.surname}</h1>
    <button className='rounded-2xl text-3xl bg-blue-700 text-white' onClick={handleClickEvent}>change student</button>
    <button className='rounded-2xl text-3xl bg-blue-700 text-white' onClick={changeNamehandler}>change name</button>
    <button className='rounded-2xl text-3xl bg-blue-700 text-white' onClick={changeSurnamehandler}>change surname</button>
    
   </div>
  
  
  </>
  
  )
}
