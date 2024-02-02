import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Error from '../../_utils/Error'
import Login from './Login'
import Register from './Register'


export default function AuthRouter() {
  return (
    <Routes>
        <Route index element={<Login/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='*' element={<Error/>}/>
    </Routes>
  )
}
