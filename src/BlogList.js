import React from 'react'

function BlogList({blogs,title}) {

    // const blogs=props.blogs
    // const title=props.title

    return (
        <div className='blog-list'>
            <h3>{title}</h3>
            {blogs.map((blog)=>(
                <div className='blog-preview' key={blog.id}>
                    <h5>{blog.title}</h5>
                    <p>Written by {blog.author}</p>
                </div>
            ))}

        </div>
    )
}

export default BlogList
