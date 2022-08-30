import React from 'react'
import "./AddBook.css"
import book from "../../assets/img/image 5.png"
export const AddBook = () => {
  return (
    <div className='d-flex '>
      <div className='  w-50  imgbox'>
        <img src={book} className="mx-auto mt-3" alt=""/>
        <div className='text-center h3 fw-bold'>Ulugbek Xazinasi</div>
        <div className='btnn'>Upload cover</div>

        
      </div>
      <div className=' text-center w-50 '>
        <p className='fw-bold h1'>Add Book</p>
        <form className='' >
          <input className='inpo' type="text" placeholder='Name'/>
          <input className='inpo' type="number" placeholder='Pages'/>
          <input className='inpo' type="text" placeholder='Year'/>
          <input className='inpo' type="text" placeholder='Price'/>
          <input className='inpo' type="text" placeholder='Genre'/>
          <input className='inpo' type="text" placeholder='Author'/>
          <textarea className=' inpo' placeholder='Description'/>
          <button className='btnn'>Create</button>
        </form>
      </div>
    </div>
  )
}
