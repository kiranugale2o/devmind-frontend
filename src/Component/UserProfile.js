import React, { useEffect, useState } from "react";
import './userprofile.css';
import Post from "../PostHandle/Post";
import axios from "axios";
import { NavLink, Route, Routes,useNavigate } from "react-router-dom";
import CommentHandle from "../PostHandle/CommentHandle";
import { imageHandler } from "../AuthPages/firebase";
export default function UserProfile(props){
    const navigate=useNavigate();
    const[edit,setEdit]=useState(false);
    const[userImg,setImg]=useState(" ");
    const[Name,setName]=useState(" ");
    const[userName,setUName]=useState(" ");
    const[bio,setBio]=useState(" ");
    const[language,setLan]=useState(" ");

     const imageSender=async()=>{
        const url=await imageHandler(userImg);
        return url;
     }
    const updateProfile=async(event)=>{
         event.preventDefault();
        const url=await imageSender();
        console.log(url)
        // if(Name==" "){setName(props.user.Name)}
        // if(userName==" "){setUName(props.user.userName)}
        // if(url==" "){setImg(props.user.url)}
        // if(bio==" "){setBio(props.user.bio)}
        // if(lan==" "){setLan(props.user.lan)}

        const updateuser={
            
            Name,
            userName,
            userImg:url,
            bio,
            language

        }

     const res=await fetch(`/user/profileupdate/${props.user._id}`,{
            method:"put",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(updateuser)
        })

        const data= await res.json();
        if(data){
            console.log(data)
            navigate("/profile")
         window.location.reload(); 
        }
      

       
    }

    
   
    
    return(
        <>
        <div className="profile" style={{display:"block",width:"90%",margin:"20px auto"}}>
            <div className="user" style={{display:"flex"}}>
                <div className="userinfo" style={{display:"block"}}>
                    <div className="name h3">{props.user.Name}</div>
                    <div className="username bold">{props.user.userName}</div>
                </div>
                <div className="userprofileimg" style={{width:"20%"}}>
                    <img src={props.user.userImg} className=" rounded-circle"  width={60} height={60} alt=""/>
                </div>
            </div>
            
            <div className="text-start " style={{width:"80%",fontWeight:"500",margin:"10px 0px"}}>{props.user.bio}</div>

            <div className="d-flex text-center">
                   <div className="followers" style={{display:"flex"}}>
                    <img src="logo192.png" style={{margin:"4px 0px"}} width={20} height={20} alt=""/>
                    <img src="profiledp.jpg" className="rounded-pill" style={{margin:"4px -6px"}} width={20} height={20} alt=""/>
                 
                    <div className="text " style={{margin:"auto 8px"}} > {(props.user.followers)}followers .</div>
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
               
            </div>
        </div>
{edit?
        <div className="edit-part">
            <div className="d-flex p-3" style={{justifyContent:"space-between",width:"95%"}}>
            <div className="text-start h5">Edit profile</div>
           
            <button  type="button" onClick={()=>setEdit(false)} style={{fontSize:"20px",color:"white" ,backgroundColor:"white"}} class="btn-close" aria-label="Close"></button>
          
            </div>
            <div className="get-inputs" style={{width:"80%",margin:"10% auto",justifyContent:"space-evenly"}}>
               <form onSubmit={updateProfile} method="put">
                <input type="text"  placeholder="Name" onChange={(e)=>setName(e.target.value)} className="form-control"/>
                <br/>
                <input type="text"  placeholder="username" onChange={(e)=>setUName(e.target.value)} className="form-control"/>
                <br/>
                <input type="text"  placeholder="Bio" onChange={(e)=>setBio(e.target.value)} className="form-control"/>
                <br/>
                <input type="text" placeholder="programming language" onChange={(e)=>setLan(e.target.value)} className="form-control"/>
                <br/>
                <input type="file"  onChange={(e)=>{setImg(e.target.files[0])}}/>
                <br/>
                <br/>
                <br/>
                <button type="submit" className="btn btn-light">Save Change</button>
                </form>
            </div>
           </div>

:<></>}
        </>
    )
}

 