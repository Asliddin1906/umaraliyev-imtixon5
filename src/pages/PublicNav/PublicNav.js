import React from 'react'
import { Link } from 'react-router-dom'

export const PublicNav = () => {
  return (
    <div>
      <Link to='/signin'>SignIn</Link>
      <Link to='/signup'>SignUp</Link>

    </div>
  )
}
