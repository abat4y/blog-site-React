import { Link } from "react-router-dom";
const BlogsList = ({blogs ,title,handeldelete}) => {
    return ( <div>
        <h2>{title}</h2>
         {blogs.map((blog) => (
            <div className="blog-perview card" key={blog.id}>
                <h1 className="card-header">{blog.title}</h1>
                <p className="card-body">{blog.body}</p>
                <Link to={`blogs/${blog.id}`}>read more..</Link>
                {/* <button className="delete" onClick={()=>{handeldelete(blog.id)}}>Delete</button> */}
            </div>
           ))}  
    </div> );
}
 
export default BlogsList;