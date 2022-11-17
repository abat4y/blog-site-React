import {useEffect, useState} from "react";
const useFetch = (url) => {
    const [data , setdata] = useState(null);
    const [ispending , setpendeing] = useState(true);
    const [error , seterror] = useState(null);
    useEffect(()=>{
        fetch(url).then(res =>{
          if (!res.ok) {
            throw Error('some Error here can not fetch')
          }
          return res.json();
        }).then(data=>{setdata(data);setpendeing(false);seterror(null)})
        .catch(err=>{seterror(err.message);setpendeing(false);})
        },[url]);
        return {data ,ispending,error }
}
export default useFetch;