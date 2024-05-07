import React from 'react'
import {BrowserRouter, Route, Router, Routes} from "react-router-dom"
import './App.css'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import Register from './Components/Register'
import Login from './Components/Login'
import Services from './Components/Services'
import Roadmap from './Components/Roadmap'
import Planningservices from './Components/Planningservices'
import ManagingServices from './Components/ManagingServices'
import LaunchingServices from './Components/LaunchingServices'
import Lmanage from './Components/Lmanage'
import Umanage from './Components/Umanage'
import Pmanage from './Components/Pmanage'
import Dashboard from './Components/Dashboard'
import ViewService from './Components/ViewService'
import AddServices from './Components/AddServices'
import Pages from './Components/Pages'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    
     <Route path='/' element={<Home/>} />
     <Route path='/Home' element={<Home/>} />
     <Route path='/Contact' element={<Contact/>} />
     <Route path='/About' element={<About/>} />
     <Route path='/Register' element={<Register/>} />
     <Route path='/Login' element={<Login/>} />
     <Route path='/Services' element={<Services/>} />
     <Route path='/Roadmap' element={<Roadmap/>} />
     <Route path='/Planningservices' element={<Planningservices/>} />
     <Route path='/Managingservices' element={<ManagingServices/>} />
     <Route path='/Launchingservices' element={<LaunchingServices/>} />
     <Route path='/Lmanage' element={<Lmanage/>} />
     <Route path='/Umanage' element={<Umanage/>} />
     <Route path='/Pmanage' element={<Pmanage/>} />
     <Route path='/Dashboard' element={<Dashboard/>} />
     <Route path='/ViewService' element={<ViewService/>} />
     <Route path='/AddServices' element={<AddServices/>} />
     <Route path='/Pages' element={<Pages/>} />
    
     

    </Routes>
    </BrowserRouter>

  )
}

export default App