import React, { useState } from "react";
import "./searchuser.css";

export default function Searchuser(props){
    const[btn,setBtn]=useState("follow");
    return(

        <>
        <div className="profile-box" >
            <div className="profile-img">
                <img src={props.data.userImg} width={50} height={50} className="rounded-circle"></img>
            </div>
            <div className="user-info" style={{display:"block",width:"100%"}}>
                <div className="text h6">{props.data.Name}</div>
                <div className="text h6">{(props.data.userName)}</div>
            </div>
            <div className="btn btn-primary" id="followbtn" onClick={()=>{if(btn=="follow"){setBtn("Following");} else{ setBtn("follow")}}} >{btn}</div>
        </div>

        <br/>
        </>
    )
}