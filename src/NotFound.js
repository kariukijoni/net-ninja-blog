import React from 'react'
import {Link} from 'react-router-dom'


export default function NotFound() {
  return (
    <div>
        <h2>
        Ooops
        </h2>
        <small>That page cannot be found....</small>
        <br />
        <Link to='/'>Home</Link>
    </div>
  )
}