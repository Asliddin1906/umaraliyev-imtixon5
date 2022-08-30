import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login/Login'
import { SignUp } from './pages/SignUp/SignUp'
import { PublicNav } from './pages/PublicNav/PublicNav'

export const Public = () => {
  return (
    <div>
      <PublicNav/>

    <Routes>
      <Route path='/signup' element={<SignUp/>}/>
      <Route  path='/signin' element={<Login/>}/>

    </Routes>
    </div>
  )
}
