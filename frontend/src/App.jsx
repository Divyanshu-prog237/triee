import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import Features from './Components/Features'
import Register from './Components/Register'
import Login from './Components/Login'
import Services from './Components/Services'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    
     <Route path='/' element={<Home/>} />
     <Route path='/Home' element={<Home/>} />
     <Route path='/Contact' element={<Contact/>} />
     <Route path='/About' element={<About/>} />
     <Route path='/Features' element={<Features/>} />
     <Route path='/Register' element={<Register/>} />
     <Route path='/Login' element={<Login/>} />
     <Route path='/Services' element={<Services/>} />
     

    </Routes>
    </BrowserRouter>

  )
}

export default App