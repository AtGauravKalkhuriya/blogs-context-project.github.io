import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import "./Blogs.css";
import  BlogDetails  from './BlogDetails';


const Blogs = () => {
    const {posts,loading} = useContext(AppContext);
    console.log("inside posts writing...");
    console.log(posts);
   
  return (
    <div className='w-11/12 max-w-[670px] h-full py-8 flex flex-col gap-y-7  mb-[70px]  justify-center items-center'>
        
        {
            loading?
            (<Spinner/>):
            (
                posts.length===0?
                (<div>
                    <p>No Post Found</p>
                    </div>) :
            (posts.map( (post)=>(
              <div className='flex flex-col justify-center items-center'>
                <BlogDetails key={post.id} post={post}/>
              </div>
                
                )))
            
            
            
            )
         }

    </div>
  );
}

export default Blogs