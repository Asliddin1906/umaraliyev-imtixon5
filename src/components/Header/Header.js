import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
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
  )
}
