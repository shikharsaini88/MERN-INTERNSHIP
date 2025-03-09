import { useState } from "react"
import { Aboutme } from "./assets/Aboutme"
import { Task } from "./assets/Task"
import { Contactus } from "./assets/Contactus"
import { Footer } from "./Footer"
import { Maincontent } from "./Maincontent"
import { Link } from "react-router"

 export  function Header(){
    // return(<>
    // <header className="flex justify-between border-b-3 p-3 font-bold bg-black"><h1 className="text-3xl text-red-400">Digital Computing</h1>
    // <ul className="text-2xl text-blue-400">Menu</ul>
   
    // </header>
    // const[currentpage,setcurrentPage]=useState(<Maincontent/>)
    // const changePage =(currentComponent)=>{
    //     setcurrentPage(currentComponent)
    // }
        return(<>
        <header className="flex justify-between bg-orange-200 border-b-4  w-full z-10">
        <h1 id="heading" className="font-bold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-black to-pink-400"> Portfolio</h1>
        <ul className="flex text-black font-bold text-2xl animate-pulse " id="list">
            
            <li className="me-3"  ><Link to="/">Home</Link></li>
            <li className="me-3"><Link to="/About">About us</Link></li>
            <li className="me-3"><Link to="/Task">Task</Link></li>
            <li className="me-3"><Link to="/Project">Project</Link></li>
             <li className="me-3"><Link to="/contact">Contact us</Link></li>
             {/* <li className="me-3"><Link to="/users">Users</Link></li>
              */}
        </ul>
    </header>
     {/* {currentpage}
     <Footer/>    */}
        
        </>)
    
    
}