import React from 'react'
import { Link,Routes, Route } from 'react-router-dom'

import { TemuriylarBooks } from '../Temuriylar/TemuriylarBooks'
import { JadidBooks } from '../Jadid/JadidBooks'
import { SovetBooks } from '../Sovet/SovetBooks'
import { MustaqillikBooks } from '../Mustaqillik/MustaqillikBooks'

import imig from "../../assets/img/home.png"
import zoom from "../../assets/img/search.png"

export const Books = () => {
  return (
    <div className='home'>
      {/* <Header/> */}
      <div className='d-flex justify-content-between '>
        <p className='logo'>BADIYAT</p>
        <div>
          <Link className='mx-2 text-decoration-none text-white link' to='/'>Bosh sahifa</Link>
          <Link className='mx-2 text-decoration-none text-white link' to='/books'>Kitoblar</Link>
        </div>
        <div>
          <Link to='/profil' className='text-white text-decoration-none'>Profil</Link>
        </div>
      </div>

      <hr className='hr'/>

      <div>
        <div>
          <img className='mx-auto'  src={imig} alt='rasm'/>
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
            <Link index className='text-decoration-none author-type' to='/books/temuriylarbooks'>Temuriylar davri</Link>
            <Link className='text-decoration-none author-type' to='/books/jadidbooks'>Jadid adabiyoti</Link>
            <Link className='text-decoration-none author-type' to='/books/sovetbooks'>Sovet davri</Link>
            <Link className='text-decoration-none author-type' to='/books/mustaqillikbooks'>Mustaqillik davri</Link>
          </div>
          <div>
          <Routes>
              <Route path='temuriylarbooks'element={<TemuriylarBooks/>} />
              <Route path='jadidbooks' element={<JadidBooks/>} />
              <Route path='sovetbooks' element={<SovetBooks/>} />
              <Route path='mustaqillikbooks' element={<MustaqillikBooks/>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}
