import React from 'react'
import {useParams} from 'react-router-dom'
import useFetch from './useFetch';
import {useNavigate} from "react-router-dom";

export default function BlogDetails() {
    
    const {id}=useParams();
    const{data:blog,isPending,error}=useFetch('http://localhost:8000/blogs/'+id)
    const navigate=useNavigate()
    
    
    const handleClick=()=>{
        fetch('http://localhost:8000/blogs/'+blog.id,{
            method:'DELETE'
        }).then(()=>{
            navigate('/')
        })
    }
    
  return (
    <div className='blog-details container'>
        {/* <h2>Blog details- {id}</h2> */}
        
        {isPending &&<i className="fa fa-spinner fa-spin"> </i>}
        {error && <div>{error}</div>}
        {blog && (
            <div className='card border-dark mt-2'>                
                <article className='ml-2'>
                    <h2>{blog.title}</h2>
                    <small>Written by <b>{blog.author}</b></small>
                    <div>{blog.body}</div>
                    <button className='btn btn-sm btn-outline-danger mb-1' onClick={handleClick}>Delete</button>
                </article>
            </div>
            
        )}
        
    </div>
  )
}