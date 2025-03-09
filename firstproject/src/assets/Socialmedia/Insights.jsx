import React, { use } from "react";
function Insights({users}) {
    return (
      <>
        <div className="h-[44vh] overflow-auto lg:h-[90vh] w- border-2 m-2 md:col-span-2 lg:col-span-1">
         {users.map((user)=> <div className="w-[85vw] sm:w-[93vw]  md:w-[40vw] lg:w-[30vw] xl:w-[31vw]  rounded border-1  m-1 p-1">
            <div className="flex   items-center justify-between rounded">
              <div className="flex border-2   items-center py-1 px-2 m- rounded-full">
                <div className="h-[50px] w-[50px] rounded-full flex bg-blue-950">
                  <img src="" alt="" />
                </div>
                <div>
                  <h1 className="m-2 ml-4">{user.name}</h1>
                </div>
              </div>
             <div className="flex ">
             <button className="px-2 py-1 ml-4 bg-blue-950 rounded text-white">
                Posts
              </button>
             </div>
            </div>
          </div>)}
        </div>
      </>
    );
  }
  
  export default Insights;