import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Login'
import Landing from '../Landing'
import SignUp from '../SignUp'
import Home from '../Home'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
    </Routes>
  )
}
