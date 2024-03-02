import React from "react";
import LeftNavbar from "../Navbar/LeftNavbar";
import "./home.css"
import Singup from "../AuthPages/Singup";
import Post from "./Post";
export default function Home(){

    const ar=[1,2,2,2,2,2,2,2,2,2,2,]
    
    return(
        <>
                <div  className="home" >
                    <div className="leftbar" >
                    <LeftNavbar/>
                    </div>
               <div className="" style={{display:"block"}}>
              {
                ar.map((d)=>{
                    return <Post/>
                })
              }
               </div>
                </div>
        </>
    )
}