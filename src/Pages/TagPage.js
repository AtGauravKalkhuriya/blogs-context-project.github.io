import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';
import { AppContext } from '../context/AppContext';


const TagPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
    // console.log("tag data",tag);
    const{mode} = useContext(AppContext);
  return (
    <div className={`flex flex-col justify-center items-center gap-y-20 ${mode?"bg-black text-white" : "bg-transparent"}`}>
        <Header/>
        <div>
          <div className='relative left-[200%]'>
          <button 
            onClick={() => navigation(-1)}
            className='fixed right-[93%] bottom-20 bg-blue-500 border rounded-md p-1 text-white w-[70px] hover:bg-lime-400 transition-all duration-200' 
            >
                back
                
            </button>

          </div>
            
            <h2>
                Blogs Tagged <span className='text-blue-700'>#{tag}</span>
            </h2>
        </div>
        <Blogs/>
        <Pagination/>
      
    </div>
  )
}

export default TagPage
