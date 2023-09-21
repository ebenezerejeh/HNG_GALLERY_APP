import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useGlobalContext } from '../context'

const PrivateRoutes = () => {
  const {authUser} = useGlobalContext();
  console.log(authUser);
  
  return (
   authUser ? <Outlet/>:<Navigate to="/login"/> 
  )
}

export default PrivateRoutes