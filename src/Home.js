import React from 'react'
import BlogList from './BlogList'
import 'font-awesome/css/font-awesome.min.css';
import useFetch from './useFetch';

export default function Home() {

    const{data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs')      

        
  return (
        <div className='home'>
            {error && <div>{error}</div>}
            {isPending && <i className="fa fa-spinner fa-spin"> </i>}
            {blogs && <BlogList blogs={blogs} title='All Blogs'/>}
            
    </div>
  )
}