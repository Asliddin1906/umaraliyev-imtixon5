import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AddAuthor } from './pages/AddAuthor/AddAuthor'
import { AddBook } from './pages/AddBook/AddBook'
import { Books } from './pages/Books/Books'
import { Home } from './pages/Home/Home'
import { MyProfil } from './pages/MyProfil/MyProfil'
import { Profil } from './pages/Profil/Profil'
import { Security } from './pages/Security/Security'


export const Private = () => {
  return (
    <div >
      {/* <AddBook/> */}
      {/* <AddAuthor/> */}
      <Routes>
        <Route path='/*' element={<Home/>}/>
        <Route path='/books/*' element={<Books/>}/>
        <Route path='/profil' element={<Profil/>}/>
        <Route path='/myprofil'element={<MyProfil/>}/>
        <Route path='/security'element={<Security/>}/>


      </Routes>
    </div>
  )
}
