import React, { useState } from "react";
import './userprofile.css';
import Post from "../PostHandle/Post";
import { NavLink, Route, Routes } from "react-router-dom";
import CommentHandle from "../PostHandle/CommentHandle";
export default function UserProfile(props){
    const[edit,setEdit]=useState(false);
    return(
        <>
        <div className="profile" style={{display:"block",width:"90%",margin:"20px auto"}}>
            <div className="user" style={{display:"flex"}}>
                <div className="userinfo" style={{display:"block"}}>
                    <div className="name h3">{props.user.Name}</div>
                    <div className="username bold">{props.user._id}</div>
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
                <div className="btn " onClick={()=>{setEdit(!edit)}} style={{backgroundColor:"black",color:"white",width:"45%",fontWeight:"600"}}>Edit profile</div>
                <div className="btn" style={{backgroundColor:"black",color:"white",width:"45%",fontWeight:"600"}}>share profile</div>
                
            </div>

            <hr/>

            
            {/* Post section */}

            <div className="text-center h4 ">your posts</div>
            <div className="posts">
                <Post/>
            
            </div>
        </div>
{edit?
        <div className="edit-part">
            <div className="d-flex p-3" style={{justifyContent:"space-between",width:"95%"}}>
            <div className="text-start h5">Edit profile</div>
           
            <button  type="button" onClick={()=>setEdit(false)} style={{fontSize:"20px",color:"white" ,backgroundColor:"white"}} class="btn-close" aria-label="Close"></button>
          
            </div>
            <div className="get-inputs" style={{width:"80%",margin:"10% auto",justifyContent:"space-evenly"}}>
               <form>
                <input type="text" placeholder="Name" className="form-control"/>
                <br/>
                <input type="text" placeholder="username" className="form-control"/>
                <br/>
                <input type="text" placeholder="Bio" className="form-control"/>
                <br/>
                <input type="text" placeholder="Links" className="form-control"/>
                <br/>
                <button type="submit" className="btn btn-dark">Update</button>
                </form>
            </div>
           </div>

:<></>}
        </>
    )
}

  const EditProfile=()=>{
    return(
        <>
           
        </>
    )
  }