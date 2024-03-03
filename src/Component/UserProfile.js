import React from "react";
import './userprofile.css';
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
            
            <div className="text-start " style={{width:"60%",fontWeight:"500",margin:"10px 0px"}}>Computer Student 
            an alt prop, either with meaningful text, or an empty string for decorative 
            #Bca</div>

            <div className="d-flex text-center">
                
                    <div className="text"> {55}followers</div>
                   
                <div className="text-center " style={{margin:"0px 13px"}}>
                    <a href="" >userLink</a>
                </div>
            </div>

            <div className="d-flex p-3" style={{width:"90%",margin:"auto",justifyContent:"space-between"}}>
                <div className="btn " style={{backgroundColor:"black",color:"white",width:"45%",fontWeight:"600"}}>Edit profile</div>
                <div className="btn" style={{backgroundColor:"black",color:"white",width:"45%",fontWeight:"600"}}>share profile</div>
                
            </div>
        </div>
        </>
    )
}
