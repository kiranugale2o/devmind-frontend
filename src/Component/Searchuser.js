import React from "react";
import "./searchuser.css";

export default function Searchuser(){
    return(

        <>
        <div className="profile-box" >
            <div className="profile-img">
                <img src="logo192.png" width={50} height={50} className="rounded-circle"></img>
            </div>
            <div className="user-info" style={{display:"block"}}>
                <div className="text h5">Username</div>
                <div className="text h6">developers</div>
            </div>
            <div className="btn btn-primary" id="followbtn"> Following</div>
        </div>

        <br/>
        </>
    )
}