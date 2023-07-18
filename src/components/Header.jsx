import React from 'react'
import Mode from './Mode'



const Header = () => {
  return (
    <div className='w-full border shadow-md py-2 '>
        <header>
        
            <h1 className='text-center uppercase text-xl font-bold'>CodeHelp Blogs</h1>
            <div>
            <Mode/>
            </div>
            
             
        </header>
    </div>
  )
}

export default Header