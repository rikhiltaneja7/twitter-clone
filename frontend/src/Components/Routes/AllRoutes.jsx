import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Login'
import Landing from '../Landing'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Landing/>}/>
    </Routes>
  )
}
