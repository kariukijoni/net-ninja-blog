// import {  } from 'bootstrap';
import { Link } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid,Tooltip, Legend, LineChart, PieChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const BlogList = ({ blogs,title }) => {
  return (
    <div className="blog-list">
      <h3>All Blogs</h3>
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
          </Link>
        </div>
      ))}
  <div className=''>
    <h4>ReCharts </h4>
        <ResponsiveContainer width='100%' height={400}>
          <BarChart data={blogs} margin={{
            top:5,
            left:30,
            right:20,
            bottom:5
          }}>

            <CartesianGrid strokeDasharray='3 3'/>
            <XAxis dataKey='author'/>
            <YAxis/>
            <Legend/>
            <Tooltip/>
            <Bar dataKey='author' fill='#888fab'/>
            <Bar dataKey='id' fill='#82ca9d'/>
          </BarChart>
        </ResponsiveContainer>
  </div>

    </div>
  );
}
 
export default BlogList;