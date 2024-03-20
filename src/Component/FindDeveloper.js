import React, { useEffect, useState } from "react";
import Searchuser from "./Searchuser";

export default function FindDeveloper(){

     const[users,setUsers]=useState([]);
     const[data,setData]=useState([]);
     const[flag,setFlag]=useState(true);
     const findUser=async()=>{
        const res=await fetch('/find/developers',{
             method:"GET",
             headers:{
                "Content-Type":"application/json",
             }   
        })

        const user=await res.json();
        if(user){
            setUsers(user)
            console.log(user)
        }
    }
    useEffect(()=>{
      findUser();
    },[])

    function searchHandler(v) {
        if (v == "") { setData(users); return 0; }
        const filterBySearch = users.filter((item) => {
            if(item.userName.toLowerCase().includes(v.toLowerCase()))
            {
                 return item; 
            }
        })
      
        if(filterBySearch.length==0){
         setFlag(false);
        }else{
          setFlag(true);
        setData(filterBySearch);
        }
      }
    return(
        <>
            <div className="text-start h3 p-3">Find Developer</div>
            <div className="">
                <input className="" placeholder="find Developer" onChange={(e)=>searchHandler(e.target.value)} style={{width:"98%",margin:"auto",height:"50px"}}></input>
             <br></br>
            <hr/>
            {flag?<>
              {data.map((d)=>{
             return <Searchuser data={d}/>
              })}</>:<i>user Not Found</i>}
            </div>
        </>
    )
}