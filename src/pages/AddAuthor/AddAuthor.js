import React from 'react'
import "./AddAuthor.css"
import avloniy from "../../assets/img/avloniy.png"
export const AddAuthor = () => {
  return (
    <div className='d-flex '>
      <div className='pt-5  w-50  imgbox'>
        <img src={avloniy} className="mx-auto  mt-3" alt=""/>
        <div className='text-center h3 my-3 fw-bold'>Ulugbek Xazinasi</div>
        <div className='btnn'>Upload Image</div>
      </div>
      <div className=' text-center w-50 '>
        <p className='fw-bold h1'>Add Author</p>
        <form className='' >
          <input className='inpo' type="text" placeholder='First name'/>
          <input className='inpo' type="text" placeholder='Last Name'/>
          <input className='inpo' type="number" placeholder='Date of birth'/>
          <input className='inpo' type="number" placeholder='Date of death'/>
          <input className='inpo' type="text" placeholder='Country'/>
          <textarea className=' inpo' placeholder='Bio'/>
          <button className='btnn'>Create</button>
        </form>
      </div>
    </div>
  )
}
