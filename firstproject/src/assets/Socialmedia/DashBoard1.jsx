import React, { useEffect, useState } from "react";
import axios from "axios";
import Dashprofile from "./Dashprofile";
import Insights from "./Insights";
import Posts from "./Posts";
import SocialHeader from "./SocialHeader";

function DashBoard1() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getUsersData();
  }, []);

  async function getUsersData() {
    var listOfUsers = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    var listOfPosts = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    console.log(listOfUsers);
    console.log(listOfPosts);

    if (listOfUsers.status == 200) {
      setUsers(listOfUsers.data);
      console.log(users);
    }

    if (listOfPosts.status == 200) {
      setPosts(listOfPosts.data);
      console.log(posts);
    }
  }
  return (
    <>
      <SocialHeader/>
      <main className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-black text-white">
          <Dashprofile/>
          <div className="h-[44vh] lg:h-[90vh] overflow-auto  border-2 m-2 ">
            <div className="h-[12vh] flex justify-center items-center rounded border-2 m-2 p-2">
              <div className=" ">
                <div className="flex  justify-center  items-center rounded"><div className="h-[50px] w-[50px] rounded-full flex bg-blue-950"><img src="" alt="" /></div>
                <div> <input type="text" placeholder="Search For Post " className="border-2 m-2 py-2 px-1 rounded-full w-[60vw] text-black md:w-[25vw] lg:w-[20vw] xl:w-[25vw] "/></div></div>
                <div className="flex justify-around items-center">
                  <div><p>Image</p></div>
                  <div><p>Video</p></div>
                  <div><p>Post</p></div>
                
                 
                  </div>
              </div>
            </div>
           <Posts posts={posts}/>
          </div>
          <Insights users={users}/>
        </div>
      </main>
    </>
  );
}

export default DashBoard1;