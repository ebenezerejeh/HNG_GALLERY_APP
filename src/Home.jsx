import React from 'react'
import {useState} from 'react'
import Header from './components/Header'
import ImagesContainer from './components/ImagesContainer'
import { useGlobalContext } from './context';
import Loading from './pages/loading';
import { Navigate } from 'react-router-dom';


const Home = () => {
  
//   const {authUser, loading2} = useGlobalContext();
//   console.log(loading2);

   
//  if(loading2){
//   return <Navigate to='/Login'/>
//  }

  return (
   <>
   <div className="main_gallery_container">
    
    <Header/>


    <ImagesContainer/>
    
    </div>
   </>
  )
}

export default Home