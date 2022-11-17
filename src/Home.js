//import {useEffect, useState} from "react";
import BlogsList from "./BlogsList";
import useFetch from "./useFetch";
function Home() {
const{data:blogs ,ispending,error } = useFetch('http://localhost:8000/blogs');
// const [blogs , setblogs] = useState([
// {title : 'first one', body:"dd dca lourm" , id:1},
// {title : '2nd one', body:"dd dca lourm" , id:2},
// {title : 'third one', body:"dd dca lourm" , id:3}
// ]);
// const handeldelete = (id) => {
//     const newblogs = blogs.filter(blog => blog.id !== id) ;
//     setblogs(newblogs);
// }
    return (
        <div className="home container">
          {error && <div><p>{error}</p></div>}
          {ispending && <div><p>looding......</p></div>}
          {blogs &&  <BlogsList blogs={blogs} title="All Blogs"/>}
        </div>
      );
}

export default Home;