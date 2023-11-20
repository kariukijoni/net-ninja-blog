import React from 'react'
import {useParams,useNavigate,Link} from 'react-router-dom'
import useFetch from './useFetch';

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
                    <div>
                        <Link className='text-decoration-none' to={`/update/${blog.id}`}>
                            <button className='btn btn-sm btn-success'>Update</button>
                        </Link>
                        {/* <button className='btn btn-sm btn-outline-primary me-1'>Edit</button> */}
                        <button className='btn btn-sm btn-outline-danger mr-2' onClick={handleClick}>Delete</button>
                    </div>
                </article>
            </div>
            
        )}
        
    </div>
  )
}