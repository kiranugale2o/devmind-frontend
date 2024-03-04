import React from "react";
import { NavLink } from "react-router-dom";

export default function CommentHandle(){
    return(
        <>
            <div className="d-flex">
                <div className="">
                <NavLink to="/profile">
            <button  type="button" class="btn-close" aria-label="Close"></button>
            </NavLink>
                </div>
                <div className="text-start h5" style={{margin:"auto 10px"}}>New Project</div>
           
            </div>
        </>
    )
}