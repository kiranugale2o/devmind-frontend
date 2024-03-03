import React, { useState } from "react";
import LeftNavbar from "../Navbar/LeftNavbar";
import "./home.css"
import Singup from "../AuthPages/Singup";
import Post from "./Post";
import FindDeveloper from "./FindDeveloper";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    
    NavLink,
    Navigate,
    
    BrowserRouter,
  } from "react-router-dom";

import Login from "../AuthPages/Login";
import PostPage from "./PostPage";
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
                            <Route path="/" element={<PostPage/>}/>
                     <Route path="/findaa" element={<FindDeveloper/>}/>
                     <Route path="/postpage" element={<PostPage/>}/>
                     <Route path="/profile" element={<><h1>Profile page</h1></>}/>
                     <Route path="/activity" element={<><h1>activity page</h1></>}/>
                     
                     </Routes>
                      
                          
                        
                    </div>
                </div>
            
              
        </>
    )
}