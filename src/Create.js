import React from 'react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom";


export default function Create() {
    const [title,setTitle]=useState('')
    const [body,setBody]=useState('')
    const [author,setAuthor]=useState('')
    const [isPending,setIsPending]=useState(false)
    const navigate = useNavigate();
    
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        
        const blog={title,body,author}
        
        setIsPending(true)
        
        // console.log(blog)
        
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('New blog added!')
            setIsPending(false)
            
            navigate('/')
        })
    }
    
  return (
    <div className='create container'>
        <h3>
            Add new blog
        </h3>
        <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input type='text' className='form-control' value={title} onChange={(e)=>setTitle(e.target.value)} required/>
            <label>Blog body:</label>
            <textarea value={body} className='form-control' onChange={(e)=>setBody(e.target.value)} required>
            </textarea>
            <label>Blog author:</label>
            <select value={author} className='form-control' onChange={(e)=>setAuthor(e.target.value)} required>
                <option value=''>--please select--</option>
                <option value='jakes'>jakes</option>
                <option value='jared'>jared</option>
                <option value='paps'>paps</option>
            </select>
            
            { !isPending && <button className='btn btn-sm btn-info mt-2'>Add Blog</button> }
            { isPending && <button className='btn btn-sm btn-success mt-2' disabled>Adding Blog...</button> }
            
        </form>
    </div>
  )
}