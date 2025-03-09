import React from 'react'
var isLoggedin=true
function getpage(){
if(isLoggedin) return <div className=' p-10 m-4 shadow-2xl shadow-gray-500'><h1>Homepage</h1></div>
else return <div className='shadow-2xl shadow-gray-50'><h1>Login page</h1></div>

}
export default function LoginCondition() {
  return (<>
  <div className='flex justify-center items-center text-3xl h-screen'>
  <div className=' p-10 m-4 shadow-2xl shadow-gray-500'><h1>Homepage</h1>
  {
    getpage()
  }
  </div>
  </div>
  </>
   
  )
}
