import React from 'react'
import user from "../../assets/img/user.png"
import photo from "../../assets/img/Group.png"
import "./MyProfil.css"

export const MyProfil = () => {
  return (
    <div className='d-flex mt-5 '>
      <div className='m-5'>
        <img className='rounded-circle' src={user} alt='user' 
        width={150}
        />
        <div>
          <img src={photo} alt='photo' width={30}/>
        </div>
      </div>
      <div className='w-75 ms-5'>
        <p className='h2'>My Profil</p>
        <form className='w-100'>
          <label>First Name</label>
          <input className='d-block my-1 w-75 input' type='text' placeholder='Name'/>
          <div>Please enter your first name</div>
          <label className='mt-3'>Last Name</label>
          <input className='d-block my-1 w-75 input' type='text' placeholder='LastName'/>
          <div className='mb-3'>Please enter your last name</div>
          <div className='d-flex '>
            <div className='w-25 me-5'>
              <label>Phone</label>
              <input className=' my-1 d-block w-100 input' type='number' placeholder='Phone'/>
              <div >Please enter your phone number</div>
            </div>
            <div className='w-25 ms-5'>
              <label>Email</label>
              <input className=' my-1 d-block w-100 input' type='email' placeholder='Email'/>
              <div>Please enter your email</div>
            </div>
          </div>
      <hr className='w-75'/>
      <button className='btn btn-dark '>Save Changes</button>
        </form>
      </div>
    </div>
  )
}
