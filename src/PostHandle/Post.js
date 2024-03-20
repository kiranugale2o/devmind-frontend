import React, { useEffect, useState } from "react";
import "./post.css";
import { NavLink } from "react-router-dom";
import CommentHandle from "./CommentHandle";

export default function Post(props){
  const[commentp,setComment]=useState(false);
  const[like,setLike]=useState(299);
  const[likecol,setLikeCol]=useState("black");
  const[ishow,setShow]=useState("none");
  

    const likeAdd=async()=>{
      const userName=props.user.userName;
      fetch(`/post/setLike/${props.data._id}`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({likecol,userName})
      }).then((res)=>res.json().then((data)=>{
       setLike(data)
      }))
    }
 
    useEffect(()=>{
        if(props.data.img===""){
          setShow("none")
        }else{
          setShow("block")
        }     
      likeAdd();
    },[])

    const savePost=async()=>{
      const userId=props.user._id;
        fetch(`/post/save/${props.data._id}`,{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({userId})
        }).then((res)=>res.json().then((data)=>{
          console.log(data)
        }))
    }
    return(
      <>
        <br></br>
            <div className="card border"  id="postcard">
   
  <div className="card-body">
    <div className="card-title" id="userinfo">
<img className="rounded-circle"  src={props.data.userImg} id="userimg"></img>
<div className="info">
<h5 className="username" >{props.data.userName}</h5>

</div>
    </div>
    
 <div className="d-block" style={{margin:"auto" ,width:"100%"}}>
    <div onClick={()=>setComment(false)} className="text h6">{props.data.description}</div>
    <img onClick={()=>setComment(false)}  src={props.data.img} class="card-img-top" style={{width:"90%",height:"300px",display:`${ishow}`}} alt="..."/>
    </div> 
    </div>
    <br/>
    <div className="" style={{display:"flex"}}>
        <div className="like" onClick={()=>{if(likecol=="red"){setLike(like-1); setLikeCol("black"); likeAdd()}else{setLike(like+1); setLikeCol("red"); likeAdd()}}} style={{margin:"0px 14px",color:`${likecol}`}}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg></div>
        <div to="comment" onClick={()=>setComment(!commentp)}  className="comment "  style={{margin:"0px 12px"}}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
  <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
</svg></div>

        <div className="share" style={{margin:"0px 12px"}}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
</svg></div>
        <div className="save" id="save" onClick={savePost} ><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"/>
</svg></div>

    </div>
    {commentp?<div style={{width:"100%"}}><CommentHandle pid={props.data._id} user={props.user}/></div>:<></>}
    <hr/>
    <div className="text-start p-1" style={{margin:"0px 10px"}}><b>{like}likes</b></div>
  
    <div className="text-start" style={{margin:"0px 10px"}}></div>
     <br/>
    </div>
    <br/>
      <div className="hr"><hr/></div>
  
        </>
    )
}