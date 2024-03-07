import React, { useEffect, useState } from "react";
import LeftNavbar from "../Navbar/LeftNavbar";
import "./home.css"
import PostPage from "../PostHandle/PostPage";
import Post from "../PostHandle/Post";
import FindDeveloper from "./FindDeveloper";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
    Navigate,
    BrowserRouter,
  } from "react-router-dom";
import ActivityHandler from "./ActivityHandler";
import Navbar from "../Navbar/Navbar";
import CommentHandle from "../PostHandle/CommentHandle";
import UserProfile from "./userProfile.js"; 
import { useNavigate } from "react-router-dom";


export default function Home(){
      const[user,setUser]=useState({});
      const navigate=useNavigate();
      const auth=async()=>{

        fetch("/user/auth",{
         method:"GET",
         headers:{
       
            "Content-Type":"application/json"
         },
         credentials:"include",
        }).then((res)=>{
            res.json().then((data)=>{
             if(res.status==200){
                console.log(data.user);
                setUser(data.user)
             }else{
                navigate("/singup")
                console.log(data)
             }
            })
           })
      }

      useEffect(()=>{
        auth();
      },[])
    
    return(
        <>
                
                <div className="home">
                    <div className="leftbar">
                        <LeftNavbar/>
                    </div>
                    <div className="insert-page">
                        <Routes>
                            <Route path="/" element={<Post/>}/>
                     <Route path="/find" element={<FindDeveloper/>}/>
                     <Route path="/postpage" element={<PostPage/>}/>
                   
                     <Route path="profile" element={<UserProfile user={user}/>}/>
                  
                     <Route path="/activity" element={<ActivityHandler/>}/>
                   
                       </Routes>
                      
                          
                        
                    </div>
                </div>
            
              
        </>
    )
}