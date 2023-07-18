import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='w-[700px]'>
        <NavLink to={`/blog/${post.id}`}>
            <span className='text-lg text-yellow-300'>{post.title}</span>
        </NavLink>
        <p>
            By
            <span>{post.author}</span>
            On {" "}
            <NavLink to={`/categories/${post.category.replaceAll(" " , "-")}`}>
                <span>{post.category}</span>
            </NavLink>
                </p>
                <p>Posted on {post.date}</p>
                <p>{post.content}</p>
                <div>
                    {
                        post.tags.map( (tag,index)=>(
                         <NavLink key={index} to={`/tags/${tag.replaceAll(" " , "-")}`}>
                                <span className='text-lime-400'>{`#${tag}`}</span>
                         </NavLink>

                        )

                        )
                    }
                </div>
    </div>
  )
}

export default BlogDetails