import React, { useState } from "react";
import './postpage.css';
import { NavLink } from "react-router-dom";
import { imageHandler ,videoSender} from "../AuthPages/firebase";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  

export default function PostPage(props){
 
    const[row,setRow]=useState(3);
    const[textdata,setText]=useState("");
    const[userImg,setImg]=useState("");
    const[imgdata,setIData]=useState("");
    const[ishow,setIshow]=useState("none")
    
        
    

    const imgSender=async(event)=>{
      const data=event.target.files[0];
      const url=await imageHandler(data);
      setImg(url);
      setIData(url);
      setIshow("block")
      toast.warning("wait a minutes")
    }

     const postSender=async(e)=>{

      e.preventDefault();
       
       const post={
        userId:props.user._id,
        userName:props.user.userName,
        userImg:props.user.userImg,
        description:textdata,
        img:userImg
       }
      fetch('/user/sendpost',{
        method:"post",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(post)
      }).then((res)=>{res.json().then((data)=>{
        console.log(data)
        toast.success("post send Successfuly")
        // window.location.reload();
      })
      })
     }
   
    return(
        <>

          <div className="" style={{display:"flex",margin:"20px auto"}}>
            <NavLink to="/">
            <button  type="button" class="btn-close" aria-label="Close"></button>
            </NavLink>
            <div className="text-start h5" style={{margin:"auto 10px"}}>New Project</div>
           
        </div>
        <hr/>
        {/* post creating part */}
        <form onSubmit={postSender}>
         <div className="box border" style={{width:"100%",margin:"-10px 0px"}}>
         <div className="user" style={{display:"flex",width:"100%"}} >
            <div className="userimg" >
                <img src={props.user.userImg}  className="rounded-pill" width={50} height={50} alt=""/>
            </div>
            <div className="" style={{display:"block",width:"100%"}}>
            <div className="text-start h5 p-1">{props.user.userName}</div>
            <textarea name="dec" class="form-control" onChange={(e)=>setText(e.target.value)} value={textdata}  placeholder="about your projects...." style={{width:"100%",border:"none",color:"black"}} id="commenmt"  rows={row}    ></textarea>
           <div className="post-data" style={{width:"100%",display:"flex",margin:"auto",justifyContent:"space-between"}}>
           <img src={imgdata}  alt="" style={{width:"45%",display:`${ishow}`}}/>
          
           </div>
          
          {/* Sendind data */}
            <div className="send-data" style={{display:"flex",width:"30%",justifyContent:"space-between",margin:"10px"}}>
      <div className="img-with-icon" style={{display:"flex"}}>
        <label htmlFor="inimg">
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-images" viewBox="0 0 16 16">
  <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
  <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"/>
</svg>
</label>
<input type="file" name="image" style={{display:"none"}} onChange={imgSender} id="inimg"></input>
</div>
<div className="hashtag-with-icon" style={{display:"flex"}}>
  <label htmlFor="inh">
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-hash" viewBox="0 0 16 16">
  <path d="M8.39 12.648a1 1 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1 1 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.51.51 0 0 0-.523-.516.54.54 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532s.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531s.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z"/>
</svg>

</label>
{/* <input type="text" accept="hash" style={{width:"0px"}} id="inv" />  */}
</div>
</div>

</div>

         </div>
        <div className="text-end">
            <button type="submit" className="btn btn-dark rounded-pill"  style={{width:"20%"}}>Post</button>
        </div>
         </div>
         </form>
       
        </>
        
    );
}