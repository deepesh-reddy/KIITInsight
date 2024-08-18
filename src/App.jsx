import React from 'react'
import './App.css'
import Login from './components/login/Login'
import MainCard from "./components/Card/MainCard"
import Home from './components/Home/Home'
import Developers from './components/Developers/Developers'
import CsePage from './components/CsePage/CsePage'
// import Developers from './components/Developers/Developers'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/developers" element={<Developers />} />
          <Route path="/home/cse" element={< CsePage/>} />
      </Routes>
    </BrowserRouter>
    {/* <Developers/> */}
    </>
  )
}

export default App
