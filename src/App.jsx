import React, { useEffect } from 'react'
import './App.css'
import Login from './components/login/Login'
import MainCard from './components/Card/MainCard'
import Home from './components/Home/Home'
import Developers from './components/Developers/Developers'
import CsePage from './components/CsePage/CsePage'
import UploadForm from './components/UploadForm/Upload'
// import Developers from './components/Developers/Developers'
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { checkLoginStatus } from './store/sllice/authSlice'

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const { isLogin } = useSelector((state) => state.auth)
  console.log(isLogin)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkLoginStatus())
  }, [])
  useEffect(() => {
    if (isLogin) {
      if (location.pathname === '/') {
        navigate('/home')
      }
    } else {
      navigate('/')
    }
  }, [isLogin, navigate])
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/developers" element={<Developers />} />
        <Route path="/home/cse" element={<CsePage />} />
        <Route path="/upload" element={<UploadForm />} />
      </Routes>

      {/* <Developers/> */}
    </>
  )
}

export default App
