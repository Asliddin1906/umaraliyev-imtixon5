import React, { useRef } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import "./SignUp.css"
import img from "../../assets/img/Frame2.svg"
import axios from 'axios'
import { useAuth } from '../../hook/useAuth/useAuth'


export const SignUp  = () => {
  const {token, setToken} = useAuth()
  const navigate = useNavigate()
  const firstName = useRef()
  const lastName = useRef()
  const phone =useRef()
  const email = useRef()
  const password = useRef()


  const handleSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post('https://book-service-layer.herokuapp.com/user/register', {
        "first_name": firstName.current.value,
        "last_name": lastName.current.value,
        "phone": phone.current.value,
        "email": email.current.value,
        "password": password.current.value
      })
			.then(function (response) {
        setToken(response.data);
				console.log(response);
				navigate("/")
			})
			.catch(function (error) {
				console.log(error);
			});
	};

  

  return (
    <div className='signup h-100 d-flex'>
      <div className='w-50  signup-img'>
        <img   src={img} alt='rasm'/>
      </div>

      <div className='w-50 p-5 m-auto '>

      <p className='h1 fw-bold'>Sign up</p>
      <div className='d-flex '>
      <p className='fw-bold'>Already have an account?</p>
      <NavLink className='text-decoration-none' to='/signin'>SignIn</NavLink>
      </div>

      <form onSubmit={handleSubmit} >
        <input ref={firstName} className='d-block p-3  w-75 signup-inp'  type='text' placeholder="First Name"/>
        <input ref={lastName} className='d-block p-3  w-75 signup-inp'  type='text' placeholder="Last Name"/>
        <input ref={phone} className='d-block p-3  w-75 signup-inp'  type='text' placeholder="Phone Number"/>
        <input ref={email} className='d-block p-3  w-75 signup-inp'  type='email' placeholder="Email.."/>
        <input ref={password} className='d-block p-3 mb-5  w-75 signup-inp'  type='password' placeholder="Password.."/>
        <button className='btnm text-white fw-bold w-75 d-block rounded-pill p-3' type='submit'> Next Step</button>
      </form>
      </div>
      
    </div>


  )
}


