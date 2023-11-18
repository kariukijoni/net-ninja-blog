import React, { useEffect, useState } from 'react'
import BlogList from './BlogList';

function Home() {
    const[blogs,setBlogs]=useState(null);
    const handleDelete=(id)=>{
        const newBlogs=blogs.filter(blog=>blog.id !== id);
        setBlogs(newBlogs)
    }
    const[isPending,setIsPending]=useState(true)

useEffect(()=>{
    setTimeout(()=>{
        fetch(' http://localhost:8000/blogs')
        .then(res=>{
        return res.json()
    })
    .then((data=>{
        // console.log(data)
        setBlogs(data)
        setIsPending(false)
    }))
    },1000)
},[]);
    
    return (
        <div className='home'>
            {isPending && <div>Loading ...</div>}
        {blogs && <BlogList blogs={blogs} title='All Blogs!' handleDelete={handleDelete}/>}
        </div>
    )
}

export default Home