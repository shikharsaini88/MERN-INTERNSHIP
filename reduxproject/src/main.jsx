import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'

import Home from './Socialmediap/Home.jsx'
import SocialmediaHeader from './assets/Socialmediap/SocialmediaHeader.jsx'
import Profile from './assets/Socialmediap/Profile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/socialmediaHeader' element={<SocialmediaHeader/>}>
      
      </Route>
      
      <Route path='/Profile' element={<Profile/>}/>
      
      
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
