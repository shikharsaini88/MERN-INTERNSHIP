import React from 'react'

function DashProfile() {
  return (
   <>
   <div className="h-[44vh] lg:h-[90vh3  w- border-2 m-2">
            <div className="bg-blue-950 h-[8vh] m-2 rounded flex justify-center items-center"> <div className="border-2 h-[100px] w-[100px]  mt-15 border-blue-900 rounded-full "></div></div>
            <div className="m-2 flex mt-12 flex-col justify-center items-center border-2 border-gray-400 rounded">
              <h1 className="text-2xl font-bold ">Username</h1>
              <h2>Developer</h2>
              <h3>Connections</h3>
            </div>
            <div className="m-2 flex  flex-col justify-center items-center border-2 border-gray-400 rounded">
              <ul>
                <li className="m-3">Home</li>
                <li className="m-3">My NetWork</li>
                <li className="m-3">Notifications</li>
              </ul>
            </div>
            <div className="m-2 flex  flex-col justify-center items-center border-2 border-gray-400 rounded p-2">Visit Your Profile</div>
          </div>
   </>
  )
}

export default DashProfile