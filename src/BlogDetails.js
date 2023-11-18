import React from 'react'
import { useParams } from 'react-router-dom'

function BlogDetails() {
    //route parameters
    const{id} = useParams()

    return (
        <div className='blog-details'>
            <h3>Blog details</h3>
        </div>
    )
}

export default BlogDetails
