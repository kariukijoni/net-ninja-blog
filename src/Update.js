import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

function Update() {

    const{id}=useParams();
    const[values,setValues]=useState({
        id:id,
        title:'',
        body:'',
        author:''
    })

    useEffect(()=>{

        axios.get('http://localhost:8000/blogs/'+id)
        .then(res=>{
            setValues({
                ...values,
                title: res.data.title,
                body: res.data.body,
                author: res.data.author
            })
        })
        .catch(err=>console.log(err))

    },[])


    const navigate=useNavigate()
    
    //function update form
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.put('http://localhost:8000/blogs/'+id,values)
        .then(res=>{
            navigate('/')
        })
    }

    return (
        <div className='card border-dark mt-2'>
            <div className='card-header'>
                <h4 className='text-center'> Update Blog</h4>
            </div>
            <div className='card-body'>
                <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type='text' className='form-control' value={values.title} onChange={e =>setValues({...values,title: e.target.value})} required/>
                <label>Blog body:</label>
                <textarea value={values.body} className='form-control' onChange={e =>setValues({...values,body: e.target.value})} required></textarea>
                <label>Blog author:</label>
                <select value={values.author} className='form-control' onChange={e =>setValues({...values,author: e.target.value})} required>
                    <option value=''>--please select--</option>
                    <option value='jakes'>jakes</option>
                    <option value='jared'>jared</option>
                    <option value='paps'>paps</option>
                </select>
                
                <button className='btn btn-sm btn-outline-success mt-2'>Update Blog</button>
                {/* { isPending && <button className='btn btn-sm btn-success mt-2' disabled>Adding Blog...</button> } */}
                
                </form>
            </div>
        </div>
    )
}

export default Update
