import { Outlet } from "react-router"
import { Aboutme } from "./assets/Aboutme"
import CompanyName from "./assets/CompanyName"
import AddContact from "./assets/Components/AddContact"
import Search from "./assets/Components/Search"
import Student from "./assets/Components/Student"
import Studentsdetail from "./assets/Components/Studentsdetail"

import { Contactus } from "./assets/Contactus"
import EventEx from "./assets/EventEx/EventEx"
import LoginCondition from "./assets/EventEx/LoginCondition"
import { Task } from "./assets/Task"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Maincontent } from "./Maincontent"
import { Sidebar } from "./Sidebar"
import Users from "./assets/Axios/Users"
import Contactsearch from "./assets/Components/Contactsearch"
import Usereducer from "./assets/Axios/Usereducer"
import Login from "./assets/Socialmedia/Login"
import LoginUser from "./assets/Socialmedia/LoginUser"
import DashBoard from "./assets/Socialmedia/DashBoard1"
import DashBoard1 from "./assets/Socialmedia/DashBoard1"



function App() {
 
  return( <>
        <Header/>
  <Outlet/>
  <Footer/>       
  
     {/* <Header /> */}
     
   {/* <Maincontent/>
   <Aboutme/>
   <Task/>
   <Contactus/>
   <Footer/>  */}
   
  
  
 {/* { <LoginCondition/> } */}

 {/* <EventEx/> */}
 {/* <Student/> */}
  {/* <Search/>
 <AddContact/>  */}
  </>
  )
  
  
}
export default App
