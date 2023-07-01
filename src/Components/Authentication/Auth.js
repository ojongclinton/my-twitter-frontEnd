import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Register from './Register'
import Signin from './Signin'


function Auth() {
  return (
    <Routes>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Signin />}/>
    </Routes>
  )
}

export default Auth
