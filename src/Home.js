import React, { useState } from 'react'
import BlogList from './BlogList';

function Home() {
    const[blogs,setBlogs]=useState([
        {title:'My website',body:'Lorem ipsum body',author:'Jane',id:1},
        {title:'Welcome party',body:'Lorem ipsum my styles',author:'kim',id:2}
    ]);
    
    return (
        <div className='home'>
        <BlogList blogs={blogs} title='All Blogs!'/>
        </div>
    )
}

export default Home