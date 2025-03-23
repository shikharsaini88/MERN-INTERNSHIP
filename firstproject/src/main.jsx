import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import { Maincontent } from './Maincontent.jsx';
import { Aboutme } from './assets/Aboutme.jsx';
import { Task } from './assets/Task.jsx';
import { Contactus } from './assets/Contactus.jsx';
import Users from './assets/Axios/Users.jsx';
import { Provider } from 'react-redux';
import Store from './assets/app/Store.jsx';
import { Sidebar } from './Sidebar.jsx';
import Sidebar2 from './sidebar2.jsx';
import Contactsearch from './assets/Components/Contactsearch.jsx';
import LoginUser from './assets/Socialmedia/LoginUser.jsx';
import DashBoard1 from './assets/Socialmedia/DashBoard1.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
      <Route index element={<Maincontent/>} />
      <Route path="/About" element={<Aboutme/>} />
      <Route path="/Task" element={<Task/>} />
      <Route path="/Project" element={<Sidebar2/>} >
     <Route index element ={<Sidebar/>}/>
     <Route path='contect' element={<Contactsearch/>}/>
     <Route path='Dashboard' element={<DashBoard1/>}/>
     <Route path='Loginuser' element={<LoginUser/>}/>


     </Route>
     
      <Route path="/users" element={<Users/>} />
      <Route path="/contact" element={<Contactus/>} />
      </Route>
      
       
 
    </Routes>
  </BrowserRouter>
  </Provider>
  </StrictMode>,
)
