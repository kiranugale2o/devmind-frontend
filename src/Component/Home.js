import React, { useState } from "react";
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
import UserProfile from "./UserProfile";

export default function Home(){

    const ar=[1,2,2,2,2,2,2,2,2,2,2,]
    
    return(
        <>
                
                <div className="home">
                    <div className="leftbar">
                        <LeftNavbar/>
                    </div>
                    <div className="insert-page">
                        <Routes>
                            <Route path="/" element={<>
                            <Post/></>}/>
                     <Route path="/findaa" element={<FindDeveloper/>}/>
                     <Route path="/postpage" element={<PostPage/>}/>
                     <Route path="/profile" element={<UserProfile/>}/>
                     <Route path="/activity" element={<ActivityHandler/>}/>
                     </Routes>
                      
                          
                        
                    </div>
                </div>
            
              
        </>
    )
}