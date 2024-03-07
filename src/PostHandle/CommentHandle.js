import React from "react";

export default function CommentHandle(){
    return(
        <>
       <div className="container p-3" style={{width:"100%"}}>
       
        <div className="text-start" >Comments</div>
        <div className="get-comment" style={{display:"flex"}} >
            <img src="profiledp.jpg" className="rounded-pill" width={40} height={40} alt="" />
            <textarea className=" "style={{width:"90%"}} rows={3}></textarea>
        </div>
        <div className="btn btn-dark " style={{margin:"6px 20px"}}>Send</div>
        <hr/>
         <Comment/>
         <Comment/>
         <Comment/>
       </div>
        </>
    )
}

const Comment=()=>{
    return(
        <>
         <div className="posts-comments">
           
         <div className="d-flex">
                <img src="profiledp.jpg" alt="" width={40} height={40} className="rounded-pill"/>
                <div className="text-start b">Kiran_patil</div>
            </div>
            <div className=" text-start  comment" style={{margin:"-15px 15%"}}>helnxnsjksjknxsjknjknnnnlnanklnlnlo</div>
          </div>
          <br/>
          <br/>
        </>
    )
}