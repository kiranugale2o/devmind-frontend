import React, { useEffect, useState } from "react";
import "./activity.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Post from "../PostHandle/Post";


export default function ActivityHandler(props){

    
    
    const[posts,setPost]=useState([]);
    const getSavePosts=async(req,res)=>{
        fetch(`/getSavePosts/${props.user._id}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        }).then((res)=>res.json().then((data)=>{
            if (data) {
              
            setPost( data)
               console.log(posts)
              } else {
                console.log("No saved posts found");
              }
        }))
    }

     useEffect(()=>{
     getSavePosts();  
     },[])
    return(
        <>
           <div className="text-start h2 p-3">Developers</div>
        <div className=""> {
            posts.map((d)=>{      //convert object to array
                return <li>{d.userName}</li>
            })
          } </div> 
      
        </>
    )
}