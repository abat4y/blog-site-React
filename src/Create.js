import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const Create = () => {
    const [title , settitle] = useState('');
    const [body , setbody] = useState('');
    const [author , setauthor] = useState('sameh');
    const [ispending , setpending] = useState(false);
    const navigate = useNavigate();

    const handelsubmit = (e) => {
        e.preventDefault();
        const blog =  {title,body,author};
        setpending(true);
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"content-type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            setpending(false);
            navigate('/');
        })
    }
    return ( <div>
        <h2>add new blog</h2>
        <form onSubmit={handelsubmit}>
            <div className="row">
            <label>blog title</label>
            <input value={title} onChange={(e)=>settitle(e.target.value)} type="text"/>
            </div>
            <div className="row">
            <label>blog body</label>
            <textarea rows={5} cols="4" value={body} onChange={(e)=>setbody(e.target.value)}>
            </textarea>
            </div>
            <div>
            <label>blog author</label>
            <select value={author} onChange={(e)=>setauthor(e.target.value)}>
                <option>sameh</option>
                <option>salma</option>
            </select>
            </div>
            {!ispending && <button>Create blog</button>}
            {ispending && <button>Creating blog......</button>}
        </form>
        </div> );
}
 
export default Create;