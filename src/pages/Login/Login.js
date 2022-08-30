import React, { useRef } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { useAuth } from '../../hook/useAuth/useAuth';
import {Link, NavLink, Route, Routes} from 'react-router-dom'
import { SignUp } from '../SignUp/SignUp';
import "./Login.css"

import img from "../../assets/img/Frame.svg"
export const Login  = () => {
  const elEmailVal = useRef();
  const elPassVal = useRef();
  const {setToken} = useAuth()

  const handleFormSubmit = (evt) =>{
    evt.preventDefault();
    axios.post('https://book-service-layer.herokuapp.com/user/login', {
      email: elEmailVal.current.value,
      password: elPassVal.current.value
    })
    .then(function (response) {
      console.log(response);
      if (response.data) {
        setToken(response.data);
        console.log(response);
      }

    })
    .catch(function (error) {
      console.log(error);
    });
    
    
    
  
  }
  return (
    <div className='login h-100 d-flex'>
      <div className='w-50  login-img'>
        <img   src={img} alt='rasm'/>
      </div>

      <div className='w-50 p-5 m-auto '>

      <p className='h1 fw-bold'>Sign in</p>
      <div className='d-flex '>
      <p className='fw-bold'>Do not you have an account?</p>
      <NavLink className='text-decoration-none' to='/signup'>SignUp</NavLink>
      </div>

      <div onSubmit={handleFormSubmit}>
        <input className='d-block p-3  w-75 login-inp' ref={elEmailVal} type='email' placeholder="Email.."/>
        <input className='d-block p-3 mb-5  w-75 login-inp' ref={elPassVal} type='password' placeholder="Password.."/>
        <button className='btnm text-white fw-bold w-75 d-block rounded-pill p-3' type='submit'> Next Step</button>
      </div>
      </div>
      
    </div>


  )
}


