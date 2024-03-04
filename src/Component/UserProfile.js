import React from "react";
import './userprofile.css';
import Post from "../PostHandle/Post";
import { Route, Routes } from "react-router-dom";
import CommentHandle from "../PostHandle/CommentHandle";
export default function UserProfile(){
    return(
        <>
        <div className="profile" style={{display:"block",width:"90%",margin:"20px auto"}}>
            <div className="user" style={{display:"flex"}}>
                <div className="userinfo" style={{display:"block"}}>
                    <div className="name h3">Kiran Ugale</div>
                    <div className="username bold">_Kiran_patil_41</div>
                </div>
                <div className="userprofileimg" style={{width:"20%"}}>
                    <img src="profiledp.jpg" className=" rounded-circle"  width={60} height={60} alt=""/>
                </div>
            </div>
            
            <div className="text-start " style={{width:"80%",fontWeight:"500",margin:"10px 0px"}}>Computer Student 
            an alt prop, either with meaningful text, or an empty string for decorative 
            #Bca</div>

            <div className="d-flex text-center">
                   <div className="followers" style={{display:"flex"}}>
                    <img src="logo192.png" style={{margin:"4px 0px"}} width={20} height={20} alt=""/>
                    <img src="profiledp.jpg" className="rounded-pill" style={{margin:"4px -6px"}} width={20} height={20} alt=""/>
                 
                    <div className="text " style={{margin:"auto 8px"}} > {55}followers .</div>
                    </div>
                <div className="text-center " style={{margin:"0px 13px"}}>
                    <a href="" >userLink</a>
                </div>
            </div>

            <div className="d-flex p-3" style={{width:"90%",margin:"auto",justifyContent:"space-between"}}>
                <div className="btn " style={{backgroundColor:"black",color:"white",width:"45%",fontWeight:"600"}}>Edit profile</div>
                <div className="btn" style={{backgroundColor:"black",color:"white",width:"45%",fontWeight:"600"}}>share profile</div>
                
            </div>

            <hr/>

            {/* Post section */}

            <div className="text-center h4 ">your posts</div>
            <div className="posts">
                <Post/>
            
            </div>
        </div>
        </>
    )
}
