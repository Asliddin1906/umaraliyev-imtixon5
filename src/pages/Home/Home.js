import React from 'react'
import { Link,Routes, Route } from 'react-router-dom'

import { TemuriylarAuthor } from '../Temuriylar/TemuriylarAuthor'
import { JadidAuthor } from '../Jadid/JadidAuthor'
import { SovetAuthor } from '../Sovet/SovetAuthor'
import { MustaqillikAuthor } from '../Mustaqillik/MustaqillikAuthor'

import "./Home.css"
import imig from "../../assets/img/home.png"
import zoom from "../../assets/img/search.png"
import user from "../../assets//img/user.png"
import vector from "../../assets/img/Vector 1.png"
import { MyProfil } from '../MyProfil/MyProfil'

export const Home = () => {
  return (
    <div className='home'>
      {/* <Header/> */}
      <div className='d-flex justify-content-between '>
        <p className='logo'>BADIYAT</p>
        <div>
          <Link className='mx-2 text-decoration-none text-white link active' to='/'>Bosh sahifa</Link>
          <Link className='mx-2 text-decoration-none text-white link ' to='/books'>Kitoblar</Link>
        </div>
        <div>
          <div to='/profil' className=' d-flex align-item-center text-white text-decoration-none'>
            <img
            src={user}
            alt='user' 
            width={40}
            className='rounded-circle'
            />
            <div className="dropdown">
              <Link className="btn  dropdown-toggle" to='/' role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              </Link>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <Link className="dropdown-item" to='myprofil'>My account</Link>
                <Link className="dropdown-item" to='security'>Security</Link>
                <Link className="dropdown-item" to='/'>Settings</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className='hr'/>

      <div>
        <div>
          <img className='mx-auto' src={imig} alt='rasm'/>
          <div className='w-75 search p-2 text-center  '>
            <p className='logo  my-3'>QIDIRISH</p>
              <div>
                <form>
                  <input className='w-75  inp' type="search" placeholder="Adiblar, kitoblar, audiolar, maqolalar..."/>
                  <button className='button '><img className='d-inline me-1' src={zoom} alt='rasm'/>Search</button>
                </form>
              </div>
          </div>
        </div>
      </div>

      <div>
        <div className='text-center'>

          <p className='logo'>ASOSIY KATEGORIYALAR</p>
          <div className='d-flex justify-content-evenly ' > 
            <Link index className='text-decoration-none author-type' to='/temuriy'>Temuriylar davri</Link>
            <Link className='text-decoration-none author-type' to='/jadid'>Jadid adabiyoti</Link>
            <Link className='text-decoration-none author-type' to='/sovet'>Sovet davri</Link>
            <Link className='text-decoration-none author-type' to='/mustaqillik'>Mustaqillik davri</Link>
          </div>
          <div>
          <Routes>
              <Route path='temuriy'element={<TemuriylarAuthor/>} />
              <Route path='/jadid' element={<JadidAuthor/>} />
              <Route path='/sovet' element={<SovetAuthor/>} />
              <Route path='/mustaqillik' element={<MustaqillikAuthor/>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}
