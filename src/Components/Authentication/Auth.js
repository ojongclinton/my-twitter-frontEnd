import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AuthComponent from './AuthComponent'

function Auth() {
  return (
    <Routes>
        <Route path='/' element={<AuthComponent />}/>
    </Routes>
  )
}

export default Auth
