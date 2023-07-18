import React, { useContext, useState } from 'react'
import Blogs from '../components/Blogs'
import Header from '../components/Header'
import Pagination from '../components/Pagination'
import { AppContext } from '../context/AppContext'




const Home = () => {
 const{mode} = useContext(AppContext);
  return (
    <div className={`w-full h-full flex flex-col justify-center items-center ${mode?"bg-black text-white" : "bg-transparent "}`}>
      
      
      <Header/>
      <div>
        <Blogs/>
        
        <Pagination/>
        
        
          
        
      </div>
      
    </div>
  )
}

export default Home
