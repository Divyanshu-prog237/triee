import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import Home from './Components/Home'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path = '/' element= {<Home/>} />
      <Route path = '/Contact' element= {<Contact/>} />
    </Routes>
    </BrowserRouter>

  )
}

export default App