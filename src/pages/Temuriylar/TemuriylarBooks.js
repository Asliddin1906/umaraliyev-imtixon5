import axios from 'axios';
import React, {  useEffect, useState } from 'react'
import { BooksCards } from '../../components/Card/BooksCard';

export const TemuriylarBooks = () => {
  const [data, setData] = useState([]);

  useEffect(()=> {
    axios
    .get('https://book-service-layer.herokuapp.com/book/genreId/1')
    .then( function (response){
      setData(response.data);
    }).catch(function (error){
      console.log(error);
    })
    
  }, []);
  
  return (
    <div className='text-warning w-100 d-flex flex-wrap justify-content-evenly'>
      {data.map((e) => 
        <BooksCards key={e.id} obj={e} />
        )}
    </div>
  )
}
