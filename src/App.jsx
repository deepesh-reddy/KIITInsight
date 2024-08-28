import React, { useEffect } from 'react'
import './App.css'
import Login from './components/login/Login'
import MainCard from './components/Card/MainCard'
import Home from './components/Home/Home'
import Developers from './components/Developers/Developers'
import CsePage from './components/CsePage/CsePage'
import UploadForm from "./components/UploadForm/Upload"
// import Developers from './components/Developers/Developers'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { checkLoginStatus } from './store/sllice/authSlice'


function App() {
  const navigate = useNavigate()
  const { isLogin } = useSelector((state) => state.auth)
  console.log(isLogin)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkLoginStatus())
  }, [])
  useEffect(() => {
    if (isLogin) {
      navigate('/home')
    } else {
      navigate('/')
    }
  }, [isLogin])
  return (
    <>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/developers" element={<Developers />} />
        <Route path="/home/cse" element={<CsePage />} />
=======
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/developers" element={<Developers />} />
          <Route path="/home/cse" element={< CsePage/>} />
          <Route path="/upload" element={< UploadForm/>} />
>>>>>>> 3c6b169fbb60fded6fdf9591c34b0a77d2a8b455
      </Routes>

      {/* <Developers/> */}
    </>
  )
}

export default App
