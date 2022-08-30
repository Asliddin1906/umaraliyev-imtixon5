import axios from 'axios';
import React, {  useEffect, useState } from 'react'
import { Cards } from '../../components/Card/Card';

export const JadidAuthor = () => {
  const [data, setData] = useState([]);

  useEffect(()=> {
    axios
    .get('https://book-service-layer.herokuapp.com/author/genreId/2')
    .then( function (response){
      setData(response.data);
    }).catch(function (error){
      console.log(error);
    })
    
  }, []);
  
  return (
    <div className='text-warning w-100 d-flex flex-wrap justify-content-evenly'>
      {data.map((e) =>   <Cards key={e.id} obj={e} />)}
    </div>
  )
}
