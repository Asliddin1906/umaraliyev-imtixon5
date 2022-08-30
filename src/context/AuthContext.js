import React from 'react'
import { useEffect, useState, createContext} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [token, setToken] = useState(JSON.parse(window.localStorage.getItem('token')));
  useEffect (()=>{
    if(token) {
      console.log(token);
      window.localStorage.setItem('token', JSON.stringify(token))
    }
    else{
      window.localStorage.removeItem('token');
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{token , setToken}}>
      {children}
    </AuthContext.Provider>
  )
}
