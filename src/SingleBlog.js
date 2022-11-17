import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from 'react-router-dom';
const SingleBlog = () => {
    const {id} = useParams();
    const{data:blogs , ispending , error } = useFetch(`http://localhost:8000/blogs/${id}`);
    const navigate = useNavigate();
    const handeldelete = (e) => {
        fetch(`http://localhost:8000/blogs/${id}`,{
            method:'DELETE',
        }).then(()=>{
            navigate('/');
        })
    }
    return ( <div style ={{padding:"83px",margin:"10px",border:"1px solid #ddd"}}>
       {error && <div><p>{error}</p></div>}
          {ispending && <div><p>looding......</p></div>}
          {blogs && <h2>{blogs.title}</h2>}
          {blogs && <p>{blogs.body}</p>}
          <button onClick={handeldelete}>delete</button>
    </div> );
}
export default SingleBlog;