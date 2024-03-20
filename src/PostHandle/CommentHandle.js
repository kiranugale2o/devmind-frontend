import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  

export default function CommentHandle(props){
    const[userComm,setComm]=useState([]);
    const[postComments,setComments]=useState([]);
    const postComment=async(event)=>{
   event.preventDefault();
         const data={
            pid:props.pid,
            uid:props.user._id,
            userComm
         }
         fetch("/sendComment",{
           method:"POST",
           headers:{
             "Content-Type":"application/json" 
           },
            body:JSON.stringify(data)
         }).then((res)=>{res.json().then((data)=>{
          console.log(data)
          toast.success(data);
          window.location.reload();
        })})

    }

    const getComment=async()=>{

      fetch(`/post/getComment/${props.pid}`,{
        method:"GET",
        headers:{
          "Content-Type":"application/json"
        }
      }).then((res)=>res.json().then((data)=>{
          setComments(data);
      }))
    }
    useEffect(()=>{
      getComment();
    },[1])
     return(
        <>
       <div className="container p-3" style={{width:"100%"}}>
       <div className="d-flex" style={{justifyContent:"space-between",fontSize:"25px"}}>
       <div className="text-start" >Comments</div>
      
       <button  type="button" onClick={()=>{window.location.reload()}} class="btn-close" aria-label="Close"></button>
       
        </div>
      
         <form onSubmit={postComment}>
        <div className="get-comment" style={{display:"flex"}} >
            <img src={props.user.userImg} className="rounded-pill" width={40} height={40} alt="" />
            <textarea className=" " onChange={(e)=>setComm(e.target.value)} style={{width:"90%"}} rows={3}></textarea>
        </div>
        <button type="submit" className="btn btn-dark "  style={{margin:"6px 20px"}}>Send</button>
        <hr/>
        {
          postComments.map((d,index)=>{
           return  <Comment comment={d} key={index}/>
          })
        }
        
         </form>
       </div>
        </>
    )
}

const Comment=(props)=>{
    return(
        <>
         <div className="posts-comments">
         <ToastContainer />
         <div className="d-flex">
                <img src={props.comment.userImg} alt="" width={40} height={40} className="rounded-pill"/>
                <div className="text-start b " style={{fontWeight:"700"}}>{props.comment.userName}</div>
            </div>
            <div className=" text-start  comment" style={{margin:"-15px 15%"}}>{props.comment.userComm}</div>
          </div>
          <br/>
          <br/>
        </>
    )
}