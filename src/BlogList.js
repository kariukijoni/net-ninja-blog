import React from 'react'

function BlogList({blogs,title,handleDelete}) {

    // const blogs=props.blogs
    // const title=props.title

    return (
        <div className='blog-preview'>
            <h3>{title}</h3>
            {blogs.map((blog)=>(
                <div className='blog-preview' key={blog.id}>
                    <h5>{blog.title}</h5>
                    <p>Written by {blog.author}</p>
                    <button onClick={()=>handleDelete(blog.id)}>Delete Blog</button>
                </div>
            ))}

        </div>
    )
}

export default BlogList
